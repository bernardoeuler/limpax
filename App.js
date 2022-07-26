import "react-native-gesture-handler"
import { useState, useEffect } from "react"
import { NativeBaseProvider, StatusBar } from "native-base"

import { NavigationContainer } from "@react-navigation/native"

import { useFonts } from "expo-font"

import interFonts from "./src/assets/fonts/inter"
import josefinSansFonts from "./src/assets/fonts/josefin-sans"

import Loading from "./src/components/Loading"

import AuthRoutes from "./src/routes/auth.routes"
import AppRoutes from "./src/routes/app.routes"

import { auth } from "./src/config/firebase"
import { onAuthStateChanged } from "firebase/auth"

import theme from "./src/config/theme"

function App() {
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
        { user ? <AppRoutes /> : <AuthRoutes /> }
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App