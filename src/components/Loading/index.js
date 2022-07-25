import React from "react"

import {
  Center,
  NativeBaseProvider,
  Spinner,
} from "native-base"

import theme from "../../config/theme"

function Loading(props) {
  return (
    <NativeBaseProvider theme={theme}>
      <Center flex={1}>
        <Spinner { ...props } color="neutral.50" size={64}/>
      </Center>
    </NativeBaseProvider>
  )
}

export default Loading