import React, { useState } from "react"
import { Box, FlatList } from "native-base"
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
      pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      status: "resolved",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      status: "resolved",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
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
        my={8}
        px={6}
        showsVerticalScrollIndicator={false}
        data={denunciations}
        renderItem={({item}) => (
          <Denunciation 
            onPress={() => navigation.navigate("DenunciationDetails", { ...item })}
            status={item.status}
            garbageType={item.garbageType}
            date={item.date}
          />
        )}
        ItemSeparatorComponent={() => <Box h={4} />}
      />
    </SafeAreaView>
  )
}

export default DenunciationsList