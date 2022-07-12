import React, { useState } from 'react'

import {
  NativeBaseProvider,
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

import { SafeAreaView, StatusBar } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import theme from "../../config/theme"

import styles from "../../styles/global"

import Input from "../../components/Input"

function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{...styles.SafeAreaView, alignItems: "center", justifyContent: "flex-start", paddingHorizontal: 24}}>
        <StatusBar barStyle="dark-content" backgroundColor="white"/>

        <HStack mt={10}>
          <NBImage source={require("../../assets/images/logo.png")} alt="Logo" size={16} />
        </HStack>

        <Heading mt={8} alignSelf="flex-start" size="h4" fontWeight="bold">Que bom te ver de novo!</Heading>

        <Text mt={1} alignSelf="flex-start" size="normal" color="neutral.800">Faça login e aproveite o que a plataforma pode lhe oferecer</Text>

        <Box mt={6} w="100%">
          <VStack space={4}>
            <Input placeholder="Email" InputLeftElement={<Icon as={<MaterialIcons name="email" />} ml={4} size={7} color="neutral.500" />} />
            <Input placeholder="Senha" type={passwordVisible ? "text" : "password"} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} ml={4} size={7} color="neutral.500" />} InputRightElement={<Icon as={<MaterialIcons name={passwordVisible ? "visibility" : "visibility-off"} />} mr={4} size={7} color={passwordVisible ? "primary.500" : "neutral.500"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
          </VStack>

          <Text mt={2} alignSelf="flex-end" color="neutral.700" size="small" fontWeight="medium" onPress={() => {navigation.navigate("ForgotPassword")}}>Esqueceu a senha?</Text>

          <NBButton mt={6} size="medium">Entrar</NBButton>

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
    </NativeBaseProvider>   
  )
}

export default Login