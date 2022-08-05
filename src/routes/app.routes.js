import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../screens/Home"
import MyDenunciations from "../screens/MyDenunciations"

function AppRoutes() {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} options={{title: "Mapa de denúncias"}} />
      <Drawer.Screen name="MyDenunciations" component={MyDenunciations} options={{title: "Minhas denúncias"}} />
    </Drawer.Navigator>
  )
}

export default AppRoutes