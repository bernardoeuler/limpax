import React from "react"
import { Text, StatusBar, Pressable, Image, Select, TextArea, VStack, Button, Box } from "native-base"
import { SafeAreaView, Dimensions } from "react-native"
import styles from "../../styles/global"
import theme from "../../config/theme"
import Input from "../../components/Input"

function NewDenunciation() {
  const { colors } = theme
  const { width: screenWidth } = Dimensions.get("window")

  return (
    <SafeAreaView style={{...styles.Container, alignItems: "center", paddingVertical: 24}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[600]} />
        <VStack w="100%" space={4}>
          <Pressable onPress={() => console.log("Pressed")} bg="red.100" height={200} borderRadius={8} overflow="hidden">
            <Image
              size={screenWidth - 48}
              resizeMode="contain"
              alt="Upload an image"
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg"
              }} 
              fallbackSource={require("../../assets/images/friendship.png")} 
            />
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

        <Button mt={8}>Finalizar</Button>
    </SafeAreaView>
  )
}

export default NewDenunciation