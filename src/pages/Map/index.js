import React from "react"
import {
  useTheme,
  Text,
  Button,
  AddIcon
} from "native-base"
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Map() {
  const { colors } = useTheme()

  return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 38.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 38.78825,
              longitude: -122.4324,
            }}
            pinColor={colors.primary[500]}
            onPress={(e) => {e.preventDefault(); console.log("clicked")}}
          />
        </MapView>
        <Button position="absolute" bottom={6} right={6} w={20} h={20} borderRadius={99999}>
          <AddIcon size={8} color="white" />
        </Button>
      </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});