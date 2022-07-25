import React from "react"
import { Text, Button } from "native-base"
import { SafeAreaView } from "react-native"
import { auth } from "../../config/firebase"
import styles from "../../styles/global"

function SeeProfile() {
  return (
    <SafeAreaView style={styles.Container}>
      <Button mt={10} onPress={() => auth.signOut()}>Sair</Button>
    </SafeAreaView>
  )
}

export default SeeProfile