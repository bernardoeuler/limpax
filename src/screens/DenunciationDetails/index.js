import React, { useState, useEffect } from "react"
import { StatusBar, ScrollView, VStack, Pressable, Image, Heading, Text } from "native-base"
import { Dimensions } from "react-native"
import styles from "../../styles/global"
import theme from "../../config/theme"
import { storage } from "../../config/firebase"
import { ref, getDownloadURL } from "firebase/storage"

function DenunciationDetails({ route }) {
  const { colors } = theme
  const { documentId: denunciationId, status, garbageType, quantity, description, date } = route.params
  const imageFullWidth = Dimensions.get("window").width - styles.Container.paddingHorizontal * 2
  const statusText = status === "pending" ? "Em andamento" : "Resolvida"
  const [fisrtImageUrl, setFirstImageUrl] = useState(null)

  useEffect(() => {
    const fisrtImageRef = ref(storage, `images/denunciations/${denunciationId}/img1`)
    getDownloadURL(fisrtImageRef)
      .then(url => setFirstImageUrl(url))
  }, [])


  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[500]} />

      <VStack space={8} my={6}>
        <Pressable bg="neutral.50" borderRadius={16} overflow="hidden">
          <Image source={{uri: fisrtImageUrl}} width={imageFullWidth} height={200} resizeMode="cover" alt="uploaded image" />
        </Pressable>

        <VStack space={1}>
          <Heading size="h6">Status da denúncia</Heading>
          <Text color="neutral.600" fontWeight="medium">{statusText}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Tipo de lixo</Heading>
          <Text color="neutral.600" fontWeight="medium">{garbageType}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Quantidade de lixo</Heading>
          <Text color="neutral.600" fontWeight="medium">{quantity}</Text>
        </VStack>
        
        <VStack space={1}>
          <Heading size="h6">Data da denúncia</Heading>
          <Text color="neutral.600" fontWeight="medium">{date}</Text>
        </VStack>

        <VStack space={1}>
          <Heading size="h6">Descrição</Heading>
          <Text color="neutral.600" fontWeight="medium">{description}</Text>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default DenunciationDetails