import React, { useState, useEffect } from "react"
import { StatusBar, ScrollView, VStack, Pressable, Image, Heading, Text, FlatList, Center, Box } from "native-base"
import { Dimensions } from "react-native"
import styles from "../../styles/global"
import theme from "../../config/theme"
import getSpecificDoc from "../../utils/getSpecificDoc"
import { auth, firestore } from "../../config/firebase"
import { getDocs, collection } from "firebase/firestore"

function DenunciationDetails({ route }) {
  const { colors } = theme
  const { documentId: denunciationId, status, garbageType, quantity, description, date } = route.params
  const imageFullWidth = Dimensions.get("window").width - styles.Container.paddingHorizontal * 2
  const statusText = status === "pending" ? "Em andamento" : "Resolvida"
  const [images, setImages] = useState([])

  useEffect(() => {
    async function getImages() {
      const authenticatedUserId = auth.currentUser.uid
      const usersRef = collection(firestore, "users")
      const userDoc = await getSpecificDoc(usersRef, "userId", authenticatedUserId)
      const imagesCollectionRef = collection(firestore, `users/${userDoc.documentId}/denunciations/${denunciationId}/images`)
      const { docs: imagesDocs } = await getDocs(imagesCollectionRef)
      const imagesArray = imagesDocs.map(doc => {
        return { ...doc.data(), documentId: doc.id }
      })
      setImages(imagesArray)
    }

    getImages()
  }, [])


  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[500]} />

      <VStack space={8} my={6}>
        <VStack space={3}>
          <Heading size="h6">Localização</Heading>
          <Pressable bg="neutral.50" borderRadius={16} overflow="hidden">
            <Image source={{uri: null}} width={imageFullWidth} height={200} resizeMode="cover" alt="Mapa" />
          </Pressable>
        </VStack>

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

        <VStack space={3}>
          <Heading size="h6">Fotos</Heading>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({item}) => {
              console.log(item.url)
              return (
                <Center key={item.documentId} position="relative" flex={1} w={24} h={24} bg="neutral.50" borderRadius={8} overflow="hidden">
                  <Image source={{ uri: item.url }} size={24} resizeMode="cover" alt="Image" />
                </Center>
              )
            }}
            ItemSeparatorComponent={() => <Box w={4} />}
          >
          </FlatList>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default DenunciationDetails