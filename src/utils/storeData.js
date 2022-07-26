import { firestore } from "../config/firebase"
import { addDoc, getDoc, collection } from "firebase/firestore"

export default function storeData(dataObject, collectionPath) {
  const collectionRef = collection(firestore, collectionPath)
  addDoc(collectionRef, dataObject)
    .then(docRef => getDoc(docRef)
      .then(doc => console.log("Document ID:", doc.id)))
    .catch(err => console.error("Error: ", err))
}