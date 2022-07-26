import React from "react"

import {
  FormControl,
  Input as NBInput,
  WarningOutlineIcon
} from "native-base"

function Input(props) {
  const { label, placeholder, type, errorMessage, InputLeftElement, InputRightElement, onChangeText } = props
  const inputProps = { label, placeholder, type, InputLeftElement, InputRightElement, onChangeText }
  const isInvalid = errorMessage.length > 0
  
  return (
      <FormControl isInvalid={isInvalid}>
        { label && <FormControl.Label>{label}</FormControl.Label> }
        <NBInput {...inputProps} />
        <FormControl.ErrorMessage mt={1} _text={{fontSize: "12px"}} leftIcon={<WarningOutlineIcon size={3} />}>{errorMessage}</FormControl.ErrorMessage>
      </FormControl>
  )
}

export default Input