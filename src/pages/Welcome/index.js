import {
  NativeBaseProvider,
  Text,
  Image as NBImage,
  Button as NBButton,
  Box,
  HStack,
  Flex,
  Heading,
} from "native-base"

import { View, Image, Dimensions } from "react-native"

import ScalableImage from 'react-native-scalable-image'

import Constants from 'expo-constants'

import theme from "../../config/theme"

// import Button from "../../components/Button"

function Welcome() {
  const deviceWidth = Dimensions.get('window').width

  return (
    <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
      <NativeBaseProvider theme={theme}>
        <Box px={6}>
          <HStack space={2} mt={8}>
            <NBImage source={require("../../assets/images/logo.png")} alt="Logo" size={12}  />
            <Text color="primary.500" fontFamily="brand" fontWeight="regular" fontSize={24}>LIMPAX</Text> 
          </HStack>

          <View style={{justifyContent: "space-between"}}>
            <Box>
              <Heading mt={6} size="h3" fontWeight="semibold">Bem-vindo ao Limpax</Heading>

              <Text mt={4} size="large">Com a nossa ajuda, você pode fazer sua parte para construir uma cidade mais limpa e sustentável.</Text>
            </Box>

            <Box mt={6}>
              <ScalableImage source={require("../../assets/images/friendship.png")} alt="Friendship" width={deviceWidth - 48} />
            </Box>

            <Box mt={6}>
              <NBButton py={"18px"} bg="transparent" borderWidth={2} variant="outline" _text={{color: "primary.500"}} _pressed={{bg: "neutral.50", borderColor: "primary.600", _text: {color: "primary.600"}}}>Entrar</NBButton>
              <NBButton mt={4}>Cadastrar</NBButton>
            </Box>
          </View>
        </Box>
      </NativeBaseProvider>
    </View>
  )
}

export default Welcome