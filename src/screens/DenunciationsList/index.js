import React, { useState } from "react"
import { Box, FlatList, Spacer } from "native-base"
import { SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "../../styles/global"
import FilterButton from "../../components/FilterButton"
import FilterGroup from "../../components/FilterGroup"
import Denunciation from "../../components/Denunciation"
import theme from "../../config/theme"

function DenunciationsList() {
  const { colors } = theme
  const navigation = useNavigation()
  const [activeFilterButton, setActiveFilterButton] = useState("pending")
  const [denunciations, setDenunciations] = useState([
    {
      status: "pending",
      garbageType: "Lixo doméstico",
      date: "20/07/2022 às 20:00"
    },
    {
      status: "resolved",
      garbageType: "Lixo industrial",
      date: "20/07/2022 às 19:00"
    },
    {
      status: "pending",
      garbageType: "Entulho",
      date: "20/07/2022 às 20:00"
    },
    {
      status: "pending",
      garbageType: "Lixo doméstico",
      date: "20/07/2022 às 20:00"
    },
    {
      status: "resolved",
      garbageType: "Lixo industrial",
      date: "20/07/2022 às 19:00"
    },
    {
      status: "pending",
      garbageType: "Entulho",
      date: "20/07/2022 às 20:00"
    },
    {
      status: "pending",
      garbageType: "Lixo doméstico",
      date: "20/07/2022 às 20:00"
    },
    {
      status: "resolved",
      garbageType: "Lixo industrial",
      date: "20/07/2022 às 19:00"
    },
    {
      status: "pending",
      garbageType: "Entulho",
      date: "20/07/2022 às 20:00"
    },
    {
      status: "pending",
      garbageType: "Lixo doméstico",
      date: "20/07/2022 às 20:00"
    },
    {
      status: "resolved",
      garbageType: "Lixo industrial",
      date: "20/07/2022 às 19:00"
    },
    {
      status: "pending",
      garbageType: "Entulho",
      date: "20/07/2022 às 20:00"
    },
  ])

  return (
    <SafeAreaView style={{...styles.Container, backgroundColor: colors.lightBg, paddingHorizontal: 0}}>
      <FilterGroup mt={6} px={6}>
        <FilterButton onPress={() => setActiveFilterButton("pending")} title="Em andamento" colorScheme="warning" isActive={activeFilterButton === "pending"} />
        <FilterButton onPress={() => setActiveFilterButton("resolved")} title="Resolvidas" colorScheme="success" isActive={activeFilterButton === "resolved"} />
      </FilterGroup>

      <FlatList
        mt={8}
        px={6}
        showsVerticalScrollIndicator={false}
        data={denunciations}
        renderItem={({item}) => (
          <Denunciation 
            onPress={() => navigation.navigate("DenunciationDetails")}
            status={item.status}
            garbageType={item.garbageType}
            date={item.date}
          />
        )}
        ItemSeparatorComponent={() => <Box h={4} />}
      />

      <Box h={6} />
    </SafeAreaView>
  )
}

export default DenunciationsList