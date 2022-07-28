import React, { useState } from "react"
import { ScrollView, StatusBar, Pressable, Image, Select, TextArea, VStack, Button, Modal, Text, CloseIcon, Box, Icon, Center, FlatList, IconButton } from "native-base"
import { ImageBackground, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import styles from "../../styles/global"
import theme from "../../config/theme"
import { auth, firestore } from "../../config/firebase"
import getSpecificDoc from "../../utils/getSpecificDoc"
import uploadImage from "../../utils/uploadImage"
import storeData from "../../utils/storeData"
import { addDoc, collection } from "firebase/firestore"

function NewDenunciation() {
  const { colors } = theme
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBtnLoading, setIsBtnLoading] = useState(false)

  const [coordinates, setCoordinates] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  })
  const [garbageType, setGarbageType] = useState("")
  const [quantity, setQuantity] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  async function handleSubmit() {
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")
    const denunciationData = {
      coordinates,
      garbageType,
      quantity,
      description,
      status: "pending",
      timestamp: Date.now()
    }

    console.log("Submiting denunciation...")

    setIsBtnLoading(true)

    try {
      const userDoc = await getSpecificDoc(usersRef, "userId", authenticatedUserId)
      const denunciationId = await storeData(denunciationData, `users/${userDoc.documentId}/denunciations`)
      console.log("Data stored in database")
      images.forEach(async ({id, uri}) => {
        const imagesPath = `images/denunciations/${denunciationId}`
        const downloadUrl = await uploadImage(uri, `${imagesPath}/img${id}`)
        const imagesCollectionRef = collection(firestore, `users/${userDoc.documentId}/denunciations/${denunciationId}/images`)
        addDoc(imagesCollectionRef, { url: downloadUrl })
      })
      setIsBtnLoading(false)
      console.log("Images uploaded succesfully")
      Alert.alert("Denúncia enviada com sucesso!", "Abra a aba Minha denúncias para ver a denúncia que acabou de fazer.")
    }

    catch (err) {
      setIsBtnLoading(false)
      console.warn("Error: " + err)
      Alert.alert("Não foi possível enviar sua denúncia", "Houve um erro inesperado, verifique se os dados estão corretos ou tente novamente mais tarde.")
    }
  }

  async function pickImageFromLibrary() {
    setIsModalVisible(false)

    const response = await ImagePicker.launchImageLibraryAsync({ 
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    })

    if (!response.cancelled) {
      setImages(prevList => [ ...prevList, { id: prevList.length + 1, uri: response.uri }])
    }
  }

  async function pickImageFromCamera() {
    setIsModalVisible(false)

    const response = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    })

    if (!response.cancelled) {
      setImages(prevList => [ ...prevList, { id: prevList.length + 1, uri: response.uri }])
    }
  }

  return (
    <ScrollView style={{...styles.Container}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[500]} />

      <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Envie uma imagem</Modal.Header>
          <Modal.Body>
            <Button size="medium" onPress={pickImageFromCamera}>Tirar foto</Button>
            <Button mt={4} size="medium" onPress={pickImageFromLibrary}>Escolher da galeria</Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <VStack w="100%" space={4} mt={6}>
        <Text fontWeight="bold" color="neutral.700">Localização</Text>

        <Pressable
          bg="neutral.50"
          height={200}
          borderRadius={8}
          overflow="hidden"
        >
          <ImageBackground style={{flex: 1, justifyContent: "flex-end", padding: 16}} resizeMode="cover" alt="Mapa" source={{ uri: "https://www.google.com/maps/d/u/0/thumbnail?mid=1A6wz5BDvr-AebBysGEQCXadWhRc&hl=en" }}>
            <Button
              maxW="60%"
              size="small"
              shadow={8}
              rounded="full"
              leftIcon={
                <Icon
                  size={6}
                  color="white"
                  as={<MaterialIcons name="edit" />} 
                />
              }
            >
              Editar localização
            </Button>
          </ImageBackground>
        </Pressable>

        <Text mt={4} fontWeight="bold" color="neutral.700">Tipo de lixo</Text>

        <Select
          onValueChange={setGarbageType}
          placeholder="Tipo de lixo"
        >
          <Select.Item label="Doméstico" value="Doméstico" />
          <Select.Item label="Industrial" value="Industrial" />
          <Select.Item label="Hospitalar" value="Hospitalar" />
          <Select.Item label="Entulho" value="Entulho" />
        </Select>

        <Text mt={4} fontWeight="bold" color="neutral.700">Quantidade de lixo</Text>

        <Select
          onValueChange={setQuantity}
          placeholder="Quantidade de lixo"
        >
          <Select.Item label="Grande" value="Grande" />
          <Select.Item label="Média" value="Média" />
          <Select.Item label="Pequena" value="Pequena" />
        </Select>

        <Text mt={4} fontWeight="bold" color="neutral.700">Descrição</Text>

        <TextArea onChangeText={setDescription} h="240px" placeholder="Descrição" fontSize={16} _focus={{bg: "neutral.50"}}/>

        <Text mt={4} fontWeight="bold" color="neutral.700">Fotos</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[{ id: 0}, ...images]}
          renderItem={({item}) => {
            if (item.id === 0) {
              return (
                <Pressable onPress={() => setIsModalVisible(true)}>
                  <Center key={item.id} flex={1} w={24} h={24} bg="neutral.50" borderRadius={8}>
                    <Icon as={<MaterialIcons name="add-a-photo" />} size={10} color="neutral.500" />
                  </Center>
                </Pressable>
              )
            }

            return (
              <Center position="relative" key={item.id} flex={1} w={24} h={24} bg="neutral.50" borderRadius={8} overflow="hidden">
                <Image source={{ uri: item.uri }} size={24} resizeMode="cover" alt="Image" />
                <IconButton onPress={() => setImages(prevList => prevList.filter(image => image.id !== item.id))} position="absolute" top={0} right={0} colorScheme="neutral" icon={<CloseIcon size={4} color="white" />} />
              </Center>
            )
          }}
          ItemSeparatorComponent={() => <Box w={4} />}
        >
        </FlatList>
      </VStack>

      <Button isLoading={isBtnLoading} onPress={handleSubmit} mt={8} mb={6}>Finalizar</Button>
    </ScrollView>
  )
}

export default NewDenunciation