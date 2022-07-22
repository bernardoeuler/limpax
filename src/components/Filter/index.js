import React, { useState } from "react"
import { Box, Button, HStack } from "native-base"
import { StyleSheet } from "react-native"

function Filter() {
  const [activeButton, setActiveButton]  = useState("pending")

  return (
    <HStack w="100%">
        <Button
          variant="outline"
          size="md"
          w="50%"
          borderLeftColor={activeButton === "pending" ? "red.600" : "success.600"}
          style={styles.pendingButton}
        >
          Em andamento
        </Button>

        <Button
          variant="outline"
          size="md"
          w="50%"
          bg="blue.600"
          borderColor={activeButton === "pending" ? "red.600" : "success.600"}
        >
          Resolvidas
        </Button>
      </HStack>
  )
}

const styles = StyleSheet.create({
  pendingButton: {
    borderLeftColor: "black"
  }
})

export default Filter