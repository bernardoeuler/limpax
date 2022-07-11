import React from 'react'

import {
  FormControl,
  Input as NBInput,
  WarningOutlineIcon
} from "native-base"

function Input(props) {
  const { label, placeholder, type, errorMessage } = props
  
  return (
      <FormControl isInvalid>
        <FormControl.Label>{label}</FormControl.Label>
        <NBInput 
          placeholder={placeholder}
          type={type}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="14px" />}>{errorMessage}</FormControl.ErrorMessage>
      </FormControl>
  )
}

export default Input