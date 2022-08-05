import { Button as NBButton } from "native-base"

function Button(props) {
  const type = props.type

  if (type === "outline") {
    return (
      <Button borderWidth={2} variant="outline" {...props}></Button>
    )
  }

  return (
    <NBButton {...props}></NBButton>
  )
}

export default Button