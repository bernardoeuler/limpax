import { useState, useEffect } from "react"
import { NativeBaseProvider, StatusBar, HamburgerIcon } from "native-base"

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useFonts } from "expo-font"

import interFonts from "./assets/fonts/inter"
import josefinSansFonts from "./assets/fonts/josefin-sans"

import Loading from "./components/Loading"
import Welcome from "./screens/Welcome"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Map from "./screens/Map"

import { auth } from "./config/firebase"
import { onAuthStateChanged } from "firebase/auth"

import theme from "./config/theme"

function App() {
  const { colors } = theme

  const Stack = createNativeStackNavigator()

  const [user, setUser] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [fontsLoaded] = useFonts({
    ...interFonts,
    ...josefinSansFonts
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsLoading(false)
      setUser(user)
    })

    return unsubscribe
  }, [])

  if (!fontsLoaded | isLoading) return <Loading />

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
      {user ? (
        <Stack.Navigator 
          screenOptions={{
            headerRight: () => <HamburgerIcon color="neutral.900" size={8} />,
            headerTitle: "Mapa de denúncias",
            headerTitleAlign: "left",
            headerTitleStyle: {
              color: colors.neutral[900]
            }
          }}
        >
          <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator> 
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      )}
      
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App
