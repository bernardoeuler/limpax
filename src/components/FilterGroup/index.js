import React from "react"
import { Button } from "native-base"

function FilterGroup({ children }) {
  return (
    <Button.Group variant="outline" w="100%">{children}</Button.Group>
  )
}

export default FilterGroup