import React from "react"
import { Center, Text, Button } from "native-base"
import { useNavigation } from "@react-navigation/native"

function DenunciationDetails() {
  const navigation = useNavigation()
  
  return (
    <Center flex={1}>
      <Text>Detalhes da denúncia</Text>
      <Button onPress={() => navigation.navigate("DenunciationsList")} w="60%">Voltar para Minhas denúncias</Button>
    </Center>
  )
}

export default DenunciationDetails