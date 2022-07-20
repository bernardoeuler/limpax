import React from "react"

import {
  Center,
  NativeBaseProvider,
  Spinner,
} from "native-base"

import theme from "../../config/theme"

function Loading() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1}>
        <Spinner color="neutral.50" size={64}/>
      </Center>
    </NativeBaseProvider>
  )
}

export default Loading