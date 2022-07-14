export default function validatePassword(password) {
  console.log("validating password")
  let errorCode = ""

  if (password.length < 6) {
    errorCode = "short-password"
  }

  if (password.length < 1) {
    errorCode = "missing-password"
  }

  console.log(errorCode)
  
  return errorCode
}