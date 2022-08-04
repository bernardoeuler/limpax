import React, { useEffect, useState } from "react"
import { StatusBar, Box, FlatList } from "native-base"
import { SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "../../styles/global"
import FilterButton from "../../components/FilterButton"
import FilterGroup from "../../components/FilterGroup"
import Denunciation from "../../components/Denunciation"
import EmptyDenunciationsFeedback from "../../components/EmptyDenunciationsFeedback"
import Loading from "../../components/Loading"
import theme from "../../config/theme"
import { auth, firestore } from "../../config/firebase"
import { getDocs, collection } from "firebase/firestore"
import getSpecificDoc from "../../utils/getSpecificDoc"
import parseTimestamp from "../../utils/parseTimestamp"

function DenunciationsList() {
  const { colors } = theme
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilterButton, setActiveFilterButton] = useState("pending")
  const [denunciations, setDenunciations] = useState([])
  const activeDenunciations = denunciations.filter(({status}) => status === activeFilterButton)

  useEffect(() => {
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")

    async function getDenunciations() {
      const userDoc = await getSpecificDoc(usersRef, "userId", authenticatedUserId)
      const denunciationsRef = collection(firestore, `users/${userDoc.documentId}/denunciations`)
      const { docs: denunciationsDocs } = await getDocs(denunciationsRef)
      const denunciationsArray = denunciationsDocs.map(doc => {
        const data = doc.data()
        return { ...data, date: parseTimestamp(data.timestamp), documentId: doc.id }
      })
      setDenunciations(denunciationsArray)
      setIsLoading(false)

      return denunciationsArray
    }

    getDenunciations()
  }, [activeFilterButton])

  function handleFilterChange(status) {
    setActiveFilterButton(status)
    setIsLoading(true)
  }

  return (
    <SafeAreaView style={{...styles.Container, backgroundColor: colors.lightBg, paddingHorizontal: 0}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[500]} />

      <FilterGroup mt={6} px={6}>
        <FilterButton onPress={() => handleFilterChange("pending")} title="Em andamento" colorScheme="warning" isActive={activeFilterButton === "pending"} />
        <FilterButton onPress={() => handleFilterChange("resolved")} title="Resolvidas" colorScheme="success" isActive={activeFilterButton === "resolved"} />
      </FilterGroup>

      { isLoading ? <Loading color="neutral.100" /> :
        <FlatList
          my={8}
          px={6}
          showsVerticalScrollIndicator={false}
          data={activeDenunciations}
          renderItem={({item}) => (
            <Denunciation 
              onPress={() => navigation.navigate("DenunciationDetails", { ...item })}
              status={item.status}
              garbageType={item.garbageType}
              date={item.date}
              key={item.documentId}
              id={item.documentId}
            />
          )}
          ItemSeparatorComponent={() => <Box h={4} />}
          ListEmptyComponent={<EmptyDenunciationsFeedback activeFilter={activeFilterButton} />}
        />       
      }

    </SafeAreaView>
  )
}

export default DenunciationsList