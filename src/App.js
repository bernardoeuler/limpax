import {
  Center,
  NativeBaseProvider,
  Spinner,
} from "native-base"

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useFonts } from "expo-font"

import interFonts from "./assets/fonts/inter"
import josefinSansFonts from "./assets/fonts/josefin-sans"

import theme from "./config/theme"

import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const Stack = createNativeStackNavigator()

  const [fontsLoaded] = useFonts({
    ...interFonts,
    ...josefinSansFonts
  })

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={theme}>
        <Center flex="1">
          <Spinner color="neutral.50" size={64}/>
        </Center>
      </NativeBaseProvider>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
