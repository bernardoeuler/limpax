import React, { useState } from "react"
import { Center, Text, Button } from "native-base"
import { SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "../../styles/global"
import FilterButton from "../../components/FilterButton"
import FilterGroup from "../../components/FilterGroup"

function DenunciationsList() {
  const navigation = useNavigation()
  const [activeButton, setActiveButton] = useState("pending")

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <FilterGroup>
        <FilterButton onPress={() => setActiveButton("pending")} title="Em andamento" colorScheme="warning" isActive={activeButton === "pending"} />
        <FilterButton onPress={() => setActiveButton("resolved")} title="Resolvidas" colorScheme="success" isActive={activeButton === "resolved"} />
      </FilterGroup>
    </SafeAreaView>
  )
}

export default DenunciationsList