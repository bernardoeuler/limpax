import {
  NativeBaseProvider,
  Spinner,
} from "native-base"

import { StatusBar } from "expo-status-bar"
import { useFonts } from "expo-font"

import interFonts from "./src/assets/fonts/inter"
import josefinSansFonts from "./src/assets/fonts/josefin-sans"

import theme from "./src/config/theme"

import Welcome from "./src/pages/Welcome"

function App() {
  const [fontsLoaded ] = useFonts({
    ...interFonts,
    ...josefinSansFonts
  })

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={theme}>
        <Spinner size={64}/>
      </NativeBaseProvider>
    )
  }

  return (
    <>
      <StatusBar style="auto"/>
      <Welcome />
    </>
  );
}

export default App