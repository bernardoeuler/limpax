import React, { useState } from 'react'

import {
  Text,
  Image as NBImage,
  Button as NBButton,
  IconButton,
  Heading,
  Box,
  HStack,
  VStack,
  Divider,
  Icon
} from "native-base"

import { SafeAreaView } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import styles from "../../styles/global"

import Input from "../../components/Input"

import { auth } from "../../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import validateEmail from '../../utils/validateEmail'

function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [btnIsLoading, setBtnIsLoading] = useState(false)

  async function handleLogin() {
    const userData = [email, password]
    setBtnIsLoading(true)

    try {
      if(validate(userData)) return setBtnIsLoading(false)
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      console.log(user.email)
    }

    catch (err) {
      handleError(err.code)
      setBtnIsLoading(false)
    }
  }

  function validate(userData) {
    const formattedUserData = userData.map((data) => typeof data === "string" ? data.trim() : data)
    const [formattedEmail, formattedPassword] = formattedUserData
    let isInvalid = false

    // Validate email
    if (formattedEmail.length < 1) {
      isInvalid = handleError("missing-email")
    }

    else if (validateEmail(formattedEmail)) {
      isInvalid = handleError("invalid-email")
    }
    
    else {
      setEmailError("")
    } 

    // Validate password
    if (formattedPassword.length < 1) {
      isInvalid = handleError("missing-password")
    }

    else {
      setPasswordError("")
    } 

    return isInvalid
  }


  function handleError(code) {
    console.log(code)
    switch (code) {
      case "missing-email":
        setEmailError("Você precisa inserir seu email para continuar")
        break
      case "missing-password":
        setPasswordError("Você precisa inserir sua senha para continuar")
        break
      case "invalid-email":
        setEmailError("Digite um email válido")
        break

      // Firebase errors
      case "auth/internal-error":
        setPasswordError("Erro no servidor, tente novamente em alguns minutos")
        break
      case "auth/user-not-found":
        setPasswordError("Este email ainda não está cadastrado")
        break
      case "auth/wrong-password":
        setPasswordError("A senha está incorreta")
        break
      case "auth/too-many-requests":
        setPasswordError("Muitas tentativas, tente novamente em alguns minutos")
        break
    }

    return true
  }

  return (
    <SafeAreaView style={{...styles.SafeAreaView, alignItems: "center", justifyContent: "flex-start"}}>
      <HStack mt={10}>
        <NBImage source={require("../../assets/images/logo.png")} alt="Logo" size={16} />
      </HStack>

      <Heading mt={8} alignSelf="flex-start" size="h4" fontWeight="bold">Que bom te ver de novo!</Heading>

      <Text mt={1} alignSelf="flex-start" size="normal" color="neutral.800">Faça login e aproveite o que a plataforma pode lhe oferecer</Text>

      <Box mt={6} w="100%">
        <VStack space={4}>
          <Input errorMessage={emailError} onChangeText={(text) => setEmail(text)} placeholder="Email" InputLeftElement={<Icon as={<MaterialIcons name="email" />} ml={4} size={7} color="neutral.500" />} />
          <Input errorMessage={passwordError} onChangeText={(text) => setPassword(text)} placeholder="Senha" type={passwordVisible ? "text" : "password"} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} ml={4} size={7} color="neutral.500" />} InputRightElement={<Icon as={<MaterialIcons name={passwordVisible ? "visibility" : "visibility-off"} />} mr={4} size={7} color={passwordVisible ? "primary.500" : "neutral.500"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
        </VStack>

        <NBButton onPress={handleLogin} isLoading={btnIsLoading} mt={6} size="medium">Entrar</NBButton>

        <HStack my={8} space={1} alignItems="center" justifyContent="center">
          <Divider w={8} h={0.5} />
          <Text alignSelf="center" size="small" fontWeight="semibold" color="neutral.300">OU</Text>
          <Divider w={8} h={0.5} />
        </HStack>

        <HStack justifyContent="space-between">
          <IconButton w="49%" borderWidth="1px" borderColor="neutral.100" _pressed={{bg: "neutral.50"}} icon={<NBImage source={require("../../assets/images/logo-google.png")} size={5} alt="google" />} />
          <IconButton w="49%" bg="#1976D2" _pressed={{bg: "#1666B6"}} icon={<NBImage source={require("../../assets/images/logo-facebook.png")} size={5} alt="google" />} />
        </HStack>
      </Box>

      <Text mt={4} size="small">Ainda não tem conta? <Text color="primary.500" fontWeight="bold" onPress={() => {navigation.navigate("Register")}}>Cadastre-se</Text></Text>
    </SafeAreaView>
  )
}

export default Login