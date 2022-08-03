export default function parseTimestamp(timestamp) {
  const date = new Date(timestamp)
  const day = date.getDate()
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  const dateString = `${day}/${month}/${year} às ${hours}:${minutes}:${seconds}`
  return dateString
}