import React from "react"
import { HamburgerIcon } from "native-base"
import { DrawerActions } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import Map from "../../screens/Map"
import NewDenunciation from "../../screens/NewDenunciation"
import theme from "../../config/theme"

function HomeStack() {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
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
          headerRight: () => <HamburgerIcon
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            color="neutral.900"
            size={6}
          />,
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

export default HomeStack