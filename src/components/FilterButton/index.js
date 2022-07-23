import React from "react"
import { Button } from "native-base"

function FilterButton(props) {
  const { title, colorScheme, isActive, onPress } = props
  const ButtonProps = { onPress }

  return (
    <Button
      { ...ButtonProps }
      w="48%"
      size="md"
      bg={isActive ? `${colorScheme}.50` : "white"}
      borderWidth={2}
      borderColor={isActive ? `${colorScheme}.600` : "neutral.400"}
      disabled={isActive}
      _text={{
        color: isActive ? `${colorScheme}.600` : "neutral.600"
      }}
      _pressed={{
        backgroundColor: "neutral.50",
        _text: {
          color: "neutral.600",
        }
      }}
    >
      { title }
    </Button>
  )
}

export default FilterButton