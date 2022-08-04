import React from "react"
import { Pressable, HStack, VStack, Box, Heading, Text, ThreeDotsIcon, IconButton, Menu } from "native-base"
import toggleStatus from "../../utils/toggleStatus"

function Denunciation(props) {
  const { status, garbageType, date, id, onPress, mb } = props
  const PressableProps = { onPress, mb }
  const statusIndicatorColorScheme = status === "pending" ? "warning" : "success"

  return (
    <Pressable w="100%" borderRadius={8} overflow="hidden" { ...PressableProps }>
      <HStack justifyContent="space-between" bg="white" borderRadius={8} overflow="hidden">
        <HStack space={5}>
          <Box
            bg={`${statusIndicatorColorScheme}.500`}
            w={1.5}
            h="100%"
          >
          </Box>
          <VStack space={1} py={5}>
            <Heading size="h6" fontWeight="semibold">{garbageType}</Heading>
            <Text color="neutral.500" fontWeight="medium">{date}</Text>
          </VStack>
        </HStack>
        <HStack alignItems="center" pr={5}>
          <Menu
            placement="right top"
            trigger={triggerProps => {
              return <IconButton icon={<ThreeDotsIcon />} colorScheme="neutral" w={12} h={12} rounded="full" { ...triggerProps } />
            }}
          >
            <Menu.Item onPress={() => toggleStatus(id)}>Marcar como { status === "pending" ? "Resolvida" : "Em andamento"}</Menu.Item>
          </Menu>
        </HStack>
      </HStack>
    </Pressable>
  )
}

export default Denunciation