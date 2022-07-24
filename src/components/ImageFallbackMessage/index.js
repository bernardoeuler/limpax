import React from "react"
import { Center, Heading, Text } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import theme from "../../config/theme"

function ImageFallbackMessage() {
  const { colors } = theme

  return (
    <Center flex={1}>
      <MaterialIcons name="file-upload" size={64} color={colors.neutral[600]} />
      <Heading maxW="50%" textAlign="center" size="h6" color="neutral.600">Envie uma imagem do local</Heading>
    </Center>
  )
}

export default ImageFallbackMessage