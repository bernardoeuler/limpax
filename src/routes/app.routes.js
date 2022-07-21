import React from "react"
import { HamburgerIcon } from "native-base"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Map from "../screens/Map"
import NewDenunciation from "../screens/NewDenunciation"
import theme from "../config/theme"

function AppRoutes() {
  const Stack = createNativeStackNavigator()
  const { colors } = theme

  return (
    <Stack.Navigator 
      screenOptions={{
        headerTitle: "Mapa de denúncias",
        headerTitleAlign: "left",
        headerTintColor: colors.neutral[900]
      }}
    >
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerRight: () => <HamburgerIcon onPress={() => navigation.openDrawer()} color="neutral.900" size={8} />,
          headerTitle: "Mapa de denúncias",
        }}
      />
      <Stack.Screen
        name="NewDenunciation"
        component={NewDenunciation}
        options={{
          headerTitle: "Nova denúncia",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary[500]
          }
        }}
      />
    </Stack.Navigator> 
  )
}

export default AppRoutes