import { useState, useEffect } from "react"

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useFonts } from "expo-font"

import interFonts from "./assets/fonts/inter"
import josefinSansFonts from "./assets/fonts/josefin-sans"

import Loading from "./pages/Loading"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

import { auth } from "./config/firebase"
import { onAuthStateChanged } from "firebase/auth"

function App() {
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
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator> 
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      )}
      
    </NavigationContainer>
  );
}

export default App
