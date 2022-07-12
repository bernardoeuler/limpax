import React from "react"

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
  Checkbox,
  Divider
} from "native-base"

import { SafeAreaView, StatusBar } from "react-native"

import theme from "../../config/theme"

import styles from "../../styles/global"

import Input from "../../components/Input"

function Register({ navigation }) {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{...styles.SafeAreaView, alignItems: "center", justifyContent: "flex-start", paddingHorizontal: 24}}>
        <StatusBar barStyle="dark-content" backgroundColor="white"/>

        <NBImage mt={10} source={require("../../assets/images/logo.png")} alt="Logo" size={16} />

        <Heading mt={6} size="h3" alignSelf="flex-start">Crie uma conta</Heading>

        <Box mt={6} w="100%">
          <VStack space={4}>
            <Input placeholder="Nome completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" type="password" />
            <Input placeholder="Confirmar senha" type="password" />
          </VStack>

          <NBButton mt={4} size="medium">Criar conta</NBButton>

          <HStack mt={4} space={2}>
            <Checkbox value="terms" accessibilityLabel="I accept the user terms" />
            <Text size="small">Eu aceito os termos do usuário</Text>
          </HStack>

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

        <Text mt={4} size="small">Já tem uma conta? <Text color="primary.500" fontWeight="bold" onPress={() => {navigation.navigate("Login")}}>Faça login</Text></Text>
      </SafeAreaView>
    </NativeBaseProvider>   
  )
}

export default Register