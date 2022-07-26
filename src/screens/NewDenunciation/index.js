import React, { useState } from "react"
import { ScrollView, StatusBar, Pressable, Image, Select, TextArea, VStack, Button, Modal, Text, CloseIcon, HStack, Icon, Center } from "native-base"
import { Dimensions, ImageBackground } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import styles from "../../styles/global"
import theme from "../../config/theme"
import Input from "../../components/Input"
import ImageFallbackMessage from "../../components/ImageFallbackMessage"
import * as ImagePicker from "expo-image-picker"

function NewDenunciation() {
  const { colors } = theme
  const { width: screenWidth } = Dimensions.get("window")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [imageUri, setImageUri] = useState(null)

  async function pickImageFromLibrary() {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    if (!response.cancelled) {
      setImageUri(response.uri);
    }
  };

  async function pickImageFromCamera() {
    const response = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    if (!response.cancelled) {
      setImageUri(response.uri);
      console.log(response.uri)
    }
  };

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
        {/* <Pressable
          onPress={() => setIsModalVisible(true)}
          bg="neutral.50"
          height={200}
          borderRadius={8}
          overflow="hidden"
          _pressed={{
            bg: "neutral.100"
          }}
        >
          { 
            imageUri ? (
              <ImageBackground style={{flex: 1, justifyContent: "flex-end"}} resizeMode="cover" alt="Upload an image" source={{ uri: imageUri }}>
                <HStack alignItems="center" justifyContent="space-between" py={2} px={4} bg="neutral.translucent">
                  <Text color="neutral.700" numberOfLines={1}>{imageUri}</Text>
                  <IconButton onPress={() => setImageUri(null)} colorScheme="neutral" size="sm" rounded="full" icon={<CloseIcon />} />
                </HStack>
              </ImageBackground>
            ) : (
              <ImageFallbackMessage />
            )
          }
        </Pressable> */}

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
          placeholder="Tipo de lixo"
        >
          <Select.Item label="Doméstico" value="domestic" />
          <Select.Item label="Industrial" value="industrial" />
          <Select.Item label="Hospitalar" value="hopitalar" />
          <Select.Item label="Entulho" value="bricks" />
        </Select>

        <Text mt={4} fontWeight="bold" color="neutral.700">Quantidade de lixo</Text>

        <Select
          placeholder="Quantidade de lixo"
        >
          <Select.Item label="Grande" value="big" />
          <Select.Item label="Média" value="average" />
          <Select.Item label="Pequena" value="small" />
        </Select>

        <Text mt={4} fontWeight="bold" color="neutral.700">Descrição</Text>

        <TextArea h="240px" placeholder="Descrição" fontSize={16} _focus={{bg: "neutral.50"}}/>

        <Text mt={4} fontWeight="bold" color="neutral.700">Descrição</Text>

        <ScrollView horizontal>
          <Center flex={1} w={24} h={24} bg="neutral.50">
            <Icon as={<MaterialIcons name="add-a-photo" />} size={10} color="neutral.500" />
          </Center>
          <Center flex={1} w={24} h={24} bg="neutral.50">
            <Icon as={<MaterialIcons name="add-a-photo" />} size={10} color="neutral.500" />
          </Center>
        </ScrollView>
      </VStack>

      <Button mt={8} mb={6}>Finalizar</Button>
    </ScrollView>
  )
}

export default NewDenunciation