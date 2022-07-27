import { storage } from "../config/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export default async function uploadImage(fileUri, filePath) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      resolve(xhr.response)
    }
    xhr.onerror = function (e) {
      console.log(e)
      reject(new TypeError("Network request failed"))
    }
    xhr.responseType = "blob"
    xhr.open("GET", fileUri, true)
    xhr.send(null)
  })
  const fileRef = ref(storage, filePath)
  
  await uploadBytes(fileRef, blob)

  blob.close()

  return await getDownloadURL(fileRef)
}