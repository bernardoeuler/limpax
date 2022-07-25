import { getDocs, where, query } from "firebase/firestore"

export default async function getFirestoreDoc(collectionRef, fieldName, searchValue) {
    const filteredCollection = query(collectionRef, where(fieldName, "==", searchValue))
    const response = await getDocs(filteredCollection)
    const document = response.docs[0]

    if (document) return { ...document.data(), documentId: document.id }

    return undefined
}
// https://firebasestorage.googleapis.com/v0/b/limpax.appspot.com/o/bandagem-do-bahia-opaco.png?alt=media&token=5f6362b9-1902-4392-900f-c2a976d94a47