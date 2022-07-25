import React from "react"
import { HamburgerIcon } from "native-base"
import { DrawerActions } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SeeProfile from "../SeeProfile"
import theme from "../../config/theme"

function Profile() {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  const { colors } = theme

  return (
    <Stack.Navigator 
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: colors.neutral[900]
      }}
    >
      <Stack.Screen
        name="SeeProfile"
        component={SeeProfile}
        options={{
          title: "Meu perfil",
          headerTintColor: "white",
          headerStyle: { 
            backgroundColor: colors.primary[500]
          },
          headerRight: () => <HamburgerIcon
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            color="white"
            size={6}
          />
        }}
      />
    </Stack.Navigator> 
  )
}

export default Profile