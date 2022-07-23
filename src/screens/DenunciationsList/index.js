import React, { useState } from "react"
import { StatusBar, Box, FlatList } from "native-base"
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
      pictureUrl: "https://cdn.pixabay.com/photo/2017/09/08/18/20/garbage-2729608__480.jpg",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53hSgQlRh9t26O11xs7T73-FwqYYw63-Zdg&usqp=CAU",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwlcUFrdkwwOD940MgjidKD81zv7afC1TxA&usqp=CAU",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OZhF4rX-mUblcTulezt4PuLw_xHSwcGPgA&usqp=CAU",
      status: "resolved",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nu3FWpKmzP8aTVs6AtAmb7eRNPeFrxd7yQ&usqp=CAU",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
    {
      pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45vZxqRGFYPv2-hdpGv6MziTopA4DMjaMyQ&usqp=CAU",
      status: "pending",
      garbageType: "Lixo doméstico",
      quantity: "Grande",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend dolor...",
      date: "20/07/2022 às 20:00"
    },
  ])
  const activeDenunciations = denunciations.filter(({status}) => status === activeFilterButton)

  return (
    <SafeAreaView style={{...styles.Container, backgroundColor: colors.lightBg, paddingHorizontal: 0}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary[600]} />

      <FilterGroup mt={6} px={6}>
        <FilterButton onPress={() => setActiveFilterButton("pending")} title="Em andamento" colorScheme="warning" isActive={activeFilterButton === "pending"} />
        <FilterButton onPress={() => setActiveFilterButton("resolved")} title="Resolvidas" colorScheme="success" isActive={activeFilterButton === "resolved"} />
      </FilterGroup>

      <FlatList
        my={8}
        px={6}
        showsVerticalScrollIndicator={false}
        data={activeDenunciations}
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