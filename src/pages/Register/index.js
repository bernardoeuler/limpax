import React from 'react'

import {
  NativeBaseProvider,
  Heading,
  Text,
  Image as NBImage,
  Button as NBButton,
  IconButton,
  Box,
  HStack,
  VStack,
  Checkbox
} from "native-base"

import { SafeAreaView, StatusBar } from 'react-native'

import theme from "../../config/theme"

import styles from "../../styles/global"

import Input from "../../components/Input"

function Register({ navigation }) {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{...styles.SafeAreaView, alignItems: "center", justifyContent: "center", paddingHorizontal: 24}}>
        <StatusBar barStyle="dark-content" backgroundColor="white"/>

        <Heading size="h3" alignSelf="flex-start">Crie uma conta</Heading>

        <Box mt={6} w="100%">
          <VStack space={3}>
            <Input placeholder="Digite seu nome" label="Nome completo"/>
            <Input placeholder="Digite seu email" label="Email"/>
            <Input placeholder="Digite sua senha" label="Senha" type="password"/>
          </VStack>

          <HStack space={2} mt={4}>
            <Checkbox value="terms" accessibilityLabel="I accept the user terms" />
            <Text size="small">Eu aceito os termos do usuário</Text>
          </HStack>

          <NBButton mt={6} size="medium">Criar conta</NBButton>

          <Text my={4} alignSelf="center" size="normal" fontWeight="semibold" color="neutral.500">OU</Text>

          <HStack justifyContent="space-between">
            <IconButton w="49%" borderWidth="1px" borderColor="neutral.100" _pressed={{bg: "neutral.50"}} icon={<NBImage source={require("../../assets/images/logo-google.png")} size={5} alt="google" />} />
            <IconButton w="49%" bg="#1976D2" _pressed={{bg: "#1666B6"}} icon={<NBImage source={require("../../assets/images/logo-facebook.png")} size={5} alt="google" />} />
          </HStack>
        </Box>

        <Text mt={4} size="small">Já tem uma conta? <Text color="primary.500" fontWeight="bold" onPress={() => {navigation.navigate("Login")}}>Faça login</Text></Text>
      </SafeAreaView>
    </NativeBaseProvider>   
  )
}

export default Register