import React, { useState, useEffect } from "react"
import {
  useTheme,
  Button,
  AddIcon
} from "native-base"
import { StyleSheet, Dimensions, SafeAreaView, PermissionsAndroid } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useNavigation } from "@react-navigation/native"
import * as Location from "expo-location"
import listDocs from "../../utils/listDocs"
import Loading from "../../components/Loading"

function Map() {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const [coordinates, setCoordinates] = useState(null)
  const [denunciations, setDenunciations] = useState([])
  const [hasLocationPermission, setHasLocationPermission] = useState(false)
  
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", getCurrentLocation)
    return unsubscribe
  }, [navigation])

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", getAllDenunciations)
    return unsubscribe
  }, [navigation])


  async function getCurrentLocation() {
    console.log("Getting coordinates...")

    setHasLocationPermission(await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION))

    if (!hasLocationPermission) {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status === "granted") {
        const { coords } = await Location.getCurrentPositionAsync()
        setCoordinates(coords)
        console.log("Coordinates saved")
        return coords
      }
    }

  }

  async function getAllDenunciations() {
    const users = await listDocs("users")
    users.forEach(async user => {
      const userDenunciations = await listDocs(`users/${user.documentId}/denunciations`)
      setDenunciations(prevList => [ ...prevList, ...userDenunciations])
    })
  }

  return (
      <SafeAreaView style={styles.container}>
        {coordinates ? <MapView
          style={styles.map}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {denunciations.map(({coordinates: c}, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: c.latitude,
                  longitude: c.longitude
                }}
                pinColor={colors.primary[500]}
                onPress={(e) => {e.preventDefault(); console.log("clicked")}}
              />
            )
          })}
          <Marker
            coordinate={{
              latitude: 38.78825,
              longitude: -122.4324,
            }}
            pinColor={colors.primary[500]}
            onPress={(e) => {e.preventDefault(); console.log("clicked")}}
          />
        </MapView> :
        <Loading color="neutral.100" />}
        <Button onPress={() => navigation.navigate("NewDenunciation")} position="absolute" bottom={6} right={6} w={20} h={20} borderRadius={99999} shadow={1}>
          <AddIcon size={8} color="white" />
        </Button>
      </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});