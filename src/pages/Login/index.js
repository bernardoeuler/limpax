import React from 'react'

import {
  NativeBaseProvider,
  Text,
  Image as NBImage,
  Button as NBButton,
  IconButton,
  Heading,
  Box,
  HStack
} from "native-base"

import { SafeAreaView } from 'react-native'

import theme from "../../config/theme"

import styles from "../../styles/global"

import Input from "../../components/Input"

function Login({ navigation }) {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{...styles.SafeAreaView, alignItems: "center", justifyContent: "center", paddingHorizontal: 24}}>
        <Heading mt={4} alignSelf="flex-start" size="h4" fontWeight="bold">Que bom te ver de novo!</Heading>

        <Text mt={1} alignSelf="flex-start" size="normal" color="neutral.800">Faça login e aproveite o que a plataforma pode lhe oferecer</Text>

        <Box mt={6} w="100%">
          <Box>
            <Input placeholder="Email" label="Email"/>
          </Box>
          <Box mt={2}>
            <Input placeholder="Senha" label="Senha" type="password"/>
          </Box>

          <Text mt={2} alignSelf="flex-end" size="small" fontWeight="medium" onPress={() => {navigation.navigate("ForgotPassword")}}>Esqueceu a senha?</Text>

          <NBButton mt={6} size="medium">Entrar</NBButton>

          <Text my={4} alignSelf="center" size="normal" fontWeight="semibold" color="neutral.500">OU</Text>

          <HStack justifyContent="space-between">
            <IconButton w="49%" borderWidth="1px" borderColor="neutral.100" _pressed={{bg: "neutral.50"}} icon={<NBImage source={require("../../assets/images/logo-google.png")} size={5} alt="google" />} />
            <IconButton w="49%" bg="#1976D2" _pressed={{bg: "#1666B6"}} icon={<NBImage source={require("../../assets/images/logo-facebook.png")} size={5} alt="google" />} />
          </HStack>
        </Box>

        <Text mt={4} size="small">Ainda não tem conta? <Text color="primary.500" fontWeight="bold" onPress={() => {navigation.navigate("Register")}}>Cadastre-se</Text></Text>
      </SafeAreaView>
    </NativeBaseProvider>   
  )
}

export default Login