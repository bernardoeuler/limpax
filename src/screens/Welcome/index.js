import {
  Text,
  Image as NBImage,
  Button as NBButton,
  Box,
  HStack,
  Heading,
} from "native-base"

import { Dimensions, SafeAreaView } from "react-native"

import ScalableImage from "react-native-scalable-image"

import styles from "../../styles/global"

function Welcome({ navigation }) {
  const deviceWidth = Dimensions.get("window").width

  return (
    <SafeAreaView style={styles.Container}>
      <HStack space={2} mt={8}>
        <NBImage source={require("../../assets/images/logo.png")} alt="Logo" size={12}  />
        <Text color="primary.500" fontFamily="brand" fontWeight="regular" fontSize={24}>LIMPAX</Text> 
      </HStack>
      <Box style={{flexGrow: 1, justifyContent: "flex-end"}} py={6}>
          <Box>
            <Heading size="h3" fontWeight="bold">Bem-vindo ao Limpax</Heading>
            <Text mt={1} size="large" color="neutral.800">Com a nossa ajuda, você pode fazer sua parte para construir uma cidade mais limpa e sustentável</Text>
          </Box>

          <Box mt={10}>
            <ScalableImage source={require("../../assets/images/friendship.png")} alt="Friendship" width={deviceWidth - 48} />
          </Box>

          <Box mt={10}>
            <NBButton onPress={() => navigation.navigate("Login")} py={"18px"} bg="transparent" borderWidth={2} variant="outline" _text={{color: "primary.500"}} _pressed={{bg: "neutral.50", borderColor: "primary.600", _text: {color: "primary.600"}}}>Entrar</NBButton>
            <NBButton onPress={() => navigation.navigate("Register")} mt={4}>Cadastrar</NBButton>
          </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Welcome