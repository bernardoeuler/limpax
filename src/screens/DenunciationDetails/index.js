import React, { useState, useEffect } from "react"
import { StatusBar, ScrollView, VStack, Pressable, Image, Heading, Text, FlatList, Center, Box } from "native-base"
import MapView, { Marker } from "react-native-maps"
import Loading from "../../components/Loading"
import styles from "../../styles/global"
import theme from "../../config/theme"
import getSpecificDoc from "../../utils/getSpecificDoc"
import { auth, firestore } from "../../config/firebase"
import { getDocs, collection, getDoc, doc } from "firebase/firestore"

function DenunciationDetails({ route }) {
  const { colors } = theme
  const { documentId: denunciationId, status, garbageType, quantity, description, date } = route.params
  const statusText = status === "pending" ? "Em andamento" : "Resolvida"
  const [coordinates, setCoordinates] = useState(null)
  const [images, setImages] = useState([])

  useEffect(() => {
    (async () => {
      const userDoc = await getUserData()

      // Set images
      const imagesCollectionRef = collection(firestore, `users/${userDoc.documentId}/denunciations/${denunciationId}/images`)
      const { docs: imagesDocs } = await getDocs(imagesCollectionRef)
      const imagesArray = imagesDocs.map(doc => {
        return { ...doc.data(), documentId: doc.id }
      })
      setImages(imagesArray)

      // Set map image uri
      const denunciationRef = doc(firestore, `users/${userDoc.documentId}/denunciations/${denunciationId}`)
      const denunciationDoc = await getDoc(denunciationRef)
      const coordsObj = denunciationDoc.get("coordinates")
      setCoordinates(coordsObj)
    })()
  }, [])

  async function getUserData() {
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")
    return await getSpecificDoc(usersRef, "userId", authenticatedUserId)
  }

  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[500]} />

      <VStack space={8} my={6}>
        <VStack space={3}>
          <Heading size="h6">Localização</Heading>
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
          { images.length > 0 ? 
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={({item}) => {
                return (
                  <Center key={item.documentId} position="relative" flex={1} w={24} h={24} bg="neutral.50" borderRadius={8} overflow="hidden">
                    <Image source={{ uri: item.url }} size={24} resizeMode="cover" alt="Image" />
                  </Center>
                )
              }}
              ItemSeparatorComponent={() => <Box w={4} />}
            >
            </FlatList> :
            <Text color="neutral.600" fontWeight="medium">Nenhuma imagem foi enviada</Text>
          }
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default DenunciationDetails