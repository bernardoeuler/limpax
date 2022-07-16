import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwMk8Q_t2J8tlyH-qA8brUT0cIqFVbM0Q",
  authDomain: "limpax.firebaseapp.com",
  projectId: "limpax",
  storageBucket: "limpax.appspot.com",
  messagingSenderId: "686174110739",
  appId: "1:686174110739:web:8fbb2cbabbc0847d8e2be6",
  measurementId: "G-0CSYCVNB62"
}

export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const auth = getAuth(app)