import React from 'react'

import {
  HStack,
  Text,
  WarningOutlineIcon
} from "native-base"

function FormErrorMessage(props) {
  const { errorMessage } = props
  
  if (errorMessage.length < 1) return null

  return (
    <HStack mt={1} space={1} alignItems="center">
      <WarningOutlineIcon color="danger.500" size={3} />
      <Text  fontSize="12px" color="danger.500">{errorMessage}</Text>
    </HStack>
  )
}

export default FormErrorMessage