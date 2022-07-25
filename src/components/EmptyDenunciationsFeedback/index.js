import React from "react"
import { Center, Text } from "native-base"

function EmptyDenunciationsFeedback({ activeFilter }) {
  const statusText = activeFilter === "pending" ? "em andamento" : "resolvidas"

  return (
    <Center flex={1} mt={4}>
      <Text maxW="80%" textAlign="center" color="neutral.600">Parece que você não possui denúncias {statusText}</Text>
    </Center>
  )
}

export default EmptyDenunciationsFeedback