import { auth, firestore } from "../config/firebase"
import { collection, doc, deleteDoc } from "firebase/firestore"
import getSpecificDoc from "./getSpecificDoc"

export default async function deleteDenunciation(denunciationId) {
  try {
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")
    const userDoc = await getSpecificDoc(usersRef, "userId", authenticatedUserId)
    const denunciationRef = doc(firestore, `users/${userDoc.documentId}/denunciations/${denunciationId}`)
    deleteDoc(denunciationRef)
    console.log("Denunciation deleted succesfully")
  }

  catch (err) {
    console.error(err)
  }
}