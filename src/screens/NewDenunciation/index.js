import React, { useState, useEffect } from "react"
import { ScrollView, StatusBar, Pressable, Image, Select, TextArea, VStack, Button, Modal, Text, CloseIcon, Box, Icon, Center, FlatList, IconButton } from "native-base"
import { Alert, PermissionsAndroid } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useNavigation } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import * as Location from "expo-location"
import Loading from "../../components/Loading"
import styles from "../../styles/global"
import theme from "../../config/theme"
import { auth, firestore } from "../../config/firebase"
import getSpecificDoc from "../../utils/getSpecificDoc"
import uploadImage from "../../utils/uploadImage"
import storeData from "../../utils/storeData"
import { addDoc, collection } from "firebase/firestore"
import { GOOGLE_MAPS_API_KEY } from "@env"

function NewDenunciation() {
  const { colors } = theme
  const navigation = useNavigation()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBtnLoading, setIsBtnLoading] = useState(false)
  const [hasLocationPermission, setHasLocationPermission] = useState(false)

  const [coordinates, setCoordinates] = useState(null)
  const [garbageType, setGarbageType] = useState("")
  const [quantity, setQuantity] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const [mapImageUri, setMapImageUri] = useState(null)

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", getCurrentLocation)

    return unsubscribe
  }, [navigation])

  async function getCurrentLocation() {
    console.log("Getting coordinates...")

    setHasLocationPermission(await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION))

    if (!hasLocationPermission) {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status === "granted") {
        const { coords } = await Location.getCurrentPositionAsync()
        setCoordinates(coords)
        setMapImageUri(`https://maps.googleapis.com/maps/api/staticmap?center=${coords.latitude},${coords.longitude}&zoom=17&size=600x600&markers=${coords.latitude},${coords.longitude}&key=${GOOGLE_MAPS_API_KEY}`)
        console.log("Coordinates saved")
        return coords
      }
    }

  }

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

    if (!hasLocationPermission) {
      setIsBtnLoading(false)
      Alert.alert("Não foi possível enviar sua denúncia", "Você precisa permitir que o aplicativo use sua localização")
      return await Location.requestForegroundPermissionsAsync()
    } 

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
      Alert.alert("Denúncia enviada com sucesso!", "Abra a aba Minha denúncias para ver a denúncia que acabou de fazer.", [{text: "OK", onPress: () => navigation.goBack()}])
      console.log("Images uploaded succesfully")
    }

    catch (err) {
      setIsBtnLoading(false)
      Alert.alert("Não foi possível enviar sua denúncia", "Houve um erro inesperado, verifique sua conexão e tente novamente.")
      console.warn("Error: " + err)
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
        <Text fontWeight="bold" color="neutral.700">Sua localização</Text>

        <Pressable
          bg="neutral.50"
          height={200}
          borderRadius={8} 
          overflow="hidden"
          pointerEvents="none"
        >
          {
          coordinates ? 
          <MapView
            style={{height: "100%", width: "100%"}}
            toolbarEnabled={false}
            zoomEnabled={false}
            zoomControlEnabled={false}
            zoomTapEnabled={false}
            rotateEnabled={false}
            pitchEnabled={false}
            loadingEnabled={false}
            region={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude
              }}
            />
          </MapView> : 
          <Loading color="neutral.100" />
          }
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
          <Select.Item label="Outros" value="Outros" />
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