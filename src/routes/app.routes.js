import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../screens/Home"
import MyDenunciations from "../screens/MyDenunciations"
import Profile from "../screens/Profile"

function AppRoutes() {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} options={{title: "Mapa de denúncias"}} />
      <Drawer.Screen name="MyDenunciations" component={MyDenunciations} options={{title: "Minhas denúncias"}} />
      <Drawer.Screen name="Profile" component={Profile} options={{title: "Perfil"}} />
    </Drawer.Navigator>
  )
}

export default AppRoutes