import { getDocs, where, query } from "firebase/firestore"

export default async function getSpecificDoc(collectionRef, fieldName, searchValue) {
    const filteredCollection = query(collectionRef, where(fieldName, "==", searchValue))
    const response = await getDocs(filteredCollection)
    const document = response.docs[0]

    if (document) return { ...document.data(), documentId: document.id }

    return undefined
}