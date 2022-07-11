import React from 'react'

import {
  NativeBaseProvider,
  Text,
  Image as NBImage,
  Button as NBButton,
  Heading,
  Box,
  HStack,
  Divider
} from "native-base"

import { SafeAreaView } from 'react-native'

import theme from "../../config/theme"

import Input from "../../components/Input"

function Login({ navigation }) {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{backgroundColor: "white", flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 24}}>
        <NBImage source={require("../../assets/images/logo.png")} alt="Logo" size={16} />
        <Heading mt={4} alignSelf="flex-start" size="h3" fontWeight="bold">Bem-vindo ao Limpax</Heading>
        <Text mt={1} alignSelf="flex-start" size="large" color="neutral.800">Faça login e aproveite o que a plataforma pode lhe oferecer</Text>

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

          <NBButton _pressed={{bg: "neutral.50", _text: {color: "neutral.700"}}} bg="white" size="medium" py="15px" borderWidth="1px" borderColor="neutral.300" _text={{fontSize: "16", fontWeight: "regular", color: "neutral.700"}} startIcon={<NBImage source={require("../../assets/images/logo-google.png")} size={5} alt="google" />}>Entrar com Google</NBButton>
          
          <NBButton mt={2} bg="#1976D2" size="medium" _text={{fontSize: "16", fontWeight: "regular"}} _pressed={{bg: "#1666B6"}} startIcon={<NBImage source={require("../../assets/images/logo-facebook.png")} size={5} alt="facebook" />}>Entrar com Facebook</NBButton>
        </Box>

        <Text mt={4} size="small">Ainda não tem conta? <Text color="primary.500" fontWeight="bold" onPress={() => {navigation.navigate("Register")}}>Cadastre-se</Text></Text>

      </SafeAreaView>
    </NativeBaseProvider>   
  )
}

export default Login