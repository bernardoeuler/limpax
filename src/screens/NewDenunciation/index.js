import React, { useState } from "react"
import { ScrollView, StatusBar, Pressable, Image, Select, TextArea, VStack, Button, Modal, Text, CloseIcon, HStack, IconButton } from "native-base"
import { Dimensions, ImageBackground } from "react-native"
import styles from "../../styles/global"
import theme from "../../config/theme"
import Input from "../../components/Input"
import ImageFallbackMessage from "../../components/ImageFallbackMessage"
import * as ImagePicker from 'expo-image-picker'

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
        <Pressable
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
        </Pressable>

        <Select
          placeholder="Tipo de lixo"
        >
          <Select.Item label="Doméstico" value="domestic" />
          <Select.Item label="Industrial" value="industrial" />
          <Select.Item label="Hospitalar" value="hopitalar" />
          <Select.Item label="Entulho" value="rocks" />
        </Select>

        <Select
          placeholder="Quantidade de lixo"
        >
          <Select.Item label="Grande" value="big" />
          <Select.Item label="Média" value="average" />
          <Select.Item label="Pequena" value="small" />
        </Select>

        <TextArea h="240px" placeholder="Descrição" fontSize={16} _focus={{bg: "neutral.50"}}/>
      </VStack>

      <Button mt={8} mb={6}>Finalizar</Button>
    </ScrollView>
  )
}

export default NewDenunciation