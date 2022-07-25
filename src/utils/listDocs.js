import { firestore } from "../config/firebase/index.js"
import { getDocs, collection } from "firebase/firestore"

export default async function listDocs(collectionPath) {
  const collectionRef = collection(firestore, collectionPath)
  const response = await getDocs(collectionRef)
    const documentList = response.docs

    if (documentList) {
      const parsedDocs = documentList.map(doc => {
        return { ...doc.data(), documentId: doc.id }
      })
      return parsedDocs
    }

    return undefined
}