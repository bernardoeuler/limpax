import React from "react"

import {
  Center,
  NativeBaseProvider,
  Text,
} from "native-base"

import theme from "../../config/theme"

function Home() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center flex="1">
        <Text color="neutral.900">Home</Text>
      </Center>
    </NativeBaseProvider>
  )
}

export default Home