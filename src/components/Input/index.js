import React from 'react'

import {
  FormControl,
  Input as NBInput,
  WarningOutlineIcon
} from "native-base"

function Input(props) {
  const { label, placeholder, type, errorMessage, InputLeftElement, InputRightElement } = props
  const inputProps = { label, placeholder, type, InputLeftElement, InputRightElement }
  
  return (
      <FormControl isInvalid>
        { label && <FormControl.Label>{label}</FormControl.Label> }
        <NBInput 
          // placeholder={placeholder}
          // type={type}
          {...inputProps}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="14px" />}>{errorMessage}</FormControl.ErrorMessage>
      </FormControl>
  )
}

export default Input