import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDwMk8Q_t2J8tlyH-qA8brUT0cIqFVbM0Q",
  authDomain: "limpax.firebaseapp.com",
  projectId: "limpax",
  storageBucket: "gs://limpax.appspot.com",
  messagingSenderId: "686174110739",
  appId: "1:686174110739:web:8fbb2cbabbc0847d8e2be6",
  measurementId: "G-0CSYCVNB62"
}

let firebaseApp

if (getApps() < 1) {
  firebaseApp = initializeApp(firebaseConfig)
}

export const firestore = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)