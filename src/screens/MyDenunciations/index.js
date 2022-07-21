import React from "react"
import { HamburgerIcon } from "native-base"
import { DrawerActions } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DenunciationsList from "../DenunciationsList"
import DenunciationDetails from "../DenunciationDetails"
import theme from "../../config/theme"

function MyDenunciations() {
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
        name="DenunciationsList"
        component={DenunciationsList}
        options={{
          title: "Minhas denúncias",
          headerRight: () => <HamburgerIcon
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            color="neutral.900"
            size={6}
          />
        }}
      />
      <Stack.Screen name="DenunciationDetails" component={DenunciationDetails} options={{title: "Detalhes da denúncia"}} />
    </Stack.Navigator> 
  )
}

export default MyDenunciations