import React from "react"

import {
  Center,
  NativeBaseProvider,
  Text,
  Button
} from "native-base"

import theme from "../../config/theme"

import { auth } from "../../config/firebase"
import { signOut } from "firebase/auth"

function Home() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center flex="1">
        <Text color="neutral.900">Home</Text>
        <Button onPress={() => signOut(auth)} mt={5} w={"50%"} size="medium">Sair</Button>
      </Center>
    </NativeBaseProvider>
  )
}

export default Home