export default function validatePassword(password) {
  let errorCode = ""

  if (password.length < 6) {
    errorCode = "short-password"
  }

  if (password.length < 1) {
    errorCode = "missing-password"
  }

  if (password.substring(0, password.length).search(" ") !== -1) {
    errorCode = "white-space-inside-password"
  }
  
  return errorCode
}