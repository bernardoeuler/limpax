import { auth, firestore } from "../config/firebase"
import { getDoc, collection, doc, setDoc } from "firebase/firestore"
import getSpecificDoc from "./getSpecificDoc"

export default async function toggleStatus(denunciationId) {
  try {
    const authenticatedUserId = auth.currentUser.uid
    const usersRef = collection(firestore, "users")
    const userDoc = await getSpecificDoc(usersRef, "userId", authenticatedUserId)
    const denunciationRef = doc(firestore, `users/${userDoc.documentId}/denunciations/${denunciationId}`)
    const denunciationDoc = await getDoc(denunciationRef)
    const status = denunciationDoc.get("status")
    const newStatus = status === "pending" ? "resolved" : "pending" 
    setDoc(denunciationRef, { ...denunciationDoc.data(), status: newStatus })
    console.log("Status changed succesfully")
  }

  catch (err) {
    console.error(err)
  }
}