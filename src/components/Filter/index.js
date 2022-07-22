import React, { useState } from "react"
import { Box, Button, HStack } from "native-base"
import { StyleSheet } from "react-native"

function Filter() {
  const [activeButton, setActiveButton]  = useState("pending")

  return (
    <Button.Group variant="outline" w="100%">
        <Button
          onPress={() => setActiveButton("pending")}
          w="50%"
          size="md"
          bg={activeButton === "pending" ? "warning.50" : "white"}
          borderWidth={2}
          borderColor={activeButton === "pending" ? "warning.600" : "neutral.400"}
          disabled={activeButton === "pending"}
          _text={{
            color: activeButton === "pending" ? "warning.600" : "neutral.600"
          }}
          _pressed={{
            backgroundColor: "neutral.50",
            _text: {
              color: "neutral.600",
            }
          }}
        >
          Em andamento
        </Button>

        <Button
          onPress={() => setActiveButton("resolved")}
          w="50%"
          size="md"
          bg={activeButton === "resolved" ? "success.50" : "white"}
          borderWidth={2}
          borderColor={activeButton === "resolved" ? "success.600" : "neutral.400"}
          disabled={activeButton === "resolved"}
          _text={{
            color: activeButton === "resolved" ? "success.600" : "neutral.600"
          }}
          _pressed={{
            backgroundColor: "neutral.50",
            _text: {
              color: "neutral.600",
            }
          }}
        >
          Resolvidas
        </Button>
      </Button.Group>
  )
}

const styles = StyleSheet.create({
  pendingButton: {
    borderLeftColor: "black"
  }
})

export default Filter