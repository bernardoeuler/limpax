export default function validateEmail(email) {
  const user = email.substring(0, email.indexOf("@"));
  const domain = email.substring(email.indexOf("@")+ 1, email.length);

  const validEmailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const isValid = validEmailExpression.test(email.toLowerCase())
  
  return !isValid
}