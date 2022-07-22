import React from "react"
import { Center, Text, Button } from "native-base"
import { SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "../../styles/global"
import Filter from "../../components/Filter"

function DenunciationsList() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Filter />
    </SafeAreaView>
  )
}

export default DenunciationsList