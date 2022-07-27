import { firestore } from "../config/firebase"
import { addDoc, getDoc, collection } from "firebase/firestore"

export default async function storeData(dataObject, collectionPath) {
  const collectionRef = collection(firestore, collectionPath)

  try {
    const docRef = await addDoc(collectionRef, dataObject)
    const doc = await getDoc(docRef)
    return doc.id
  }

  catch (err) {
    console.error("Error: ", err)
    throw Error(err)
  }
}