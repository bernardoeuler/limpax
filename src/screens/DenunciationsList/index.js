import React from "react"
import { Center, Text, Button } from "native-base"
import { useNavigation } from "@react-navigation/native"

function DenunciationsList() {
  const navigation = useNavigation()

  return (
    <Center flex={1}>
      <Text>Lista de denuncias</Text>
      <Button onPress={() => navigation.navigate("DenunciationDetails")} w="60%">Ver detalhes de uma denúncia específica</Button>
    </Center>
  )
}

export default DenunciationsList