import React from "react"
import { Pressable, HStack, VStack, Box, Heading, Text } from "native-base"

function Denunciation(props) {
  const { status, garbageType, date, onPress, mb } = props
  const PressableProps = { onPress, mb }
  const statusIndicatorColorScheme = status === "pending" ? "warning" : "success"

  return (
    <Pressable w="100%" borderRadius={8} overflow="hidden" { ...PressableProps }>
      <HStack bg="white" space={5} borderRadius={8} overflow="hidden">
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
    </Pressable>
  )
}

export default Denunciation