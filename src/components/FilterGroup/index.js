import React from "react"
import { Button } from "native-base"

function FilterGroup(props) {
  return (
    <Button.Group justifyContent="space-between" variant="outline" w="100%" {...props}>{props.children}</Button.Group>
  )
}

export default FilterGroup