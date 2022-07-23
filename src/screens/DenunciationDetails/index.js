import React from "react"
import { Box, VStack, Heading, Text, ScrollView } from "native-base"
import { Dimensions } from "react-native"
import ScalableImage from "react-native-scalable-image"
import styles from "../../styles/global"

function DenunciationDetails({ route }) {
  const { pictureUrl, status, garbageType, quantity, description, date } = route.params
  const imageFullWidth = Dimensions.get("window").width - styles.Container.paddingHorizontal * 2
  const statusText = status === "pending" ? "Em andamento" : "Resolvida"

  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      <VStack space={8} my={6}>
        <Box borderRadius={16} overflow="hidden">
          <ScalableImage source={{uri: pictureUrl}} width={imageFullWidth} />
        </Box>

        <VStack space={1}>
          <Heading size="h6">Status da denúncia</Heading>
          <Text color="neutral.700" fontWeight="medium">{statusText}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Tipo de lixo</Heading>
          <Text color="neutral.700" fontWeight="medium">{garbageType}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Quantidade de lixo</Heading>
          <Text color="neutral.700" fontWeight="medium">{quantity}</Text>
        </VStack>
        
        <VStack space={1}>
          <Heading size="h6">Data da denúncia</Heading>
          <Text color="neutral.700" fontWeight="medium">{date}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Descrição</Heading>
          <Text color="neutral.700" fontWeight="medium">{description}</Text>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default DenunciationDetails