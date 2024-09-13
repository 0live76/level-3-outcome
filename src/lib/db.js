// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz3lo2_3CX6HOOpPPiwBMt9B4CUgwX_JE",
  authDomain: "outcome-2c848.firebaseapp.com",
  projectId: "outcome-2c848",
  storageBucket: "outcome-2c848.appspot.com",
  messagingSenderId: "714562778561",
  appId: "1:714562778561:web:aa5b08b89a143b42996b40",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

import { doc, getDoc, updateDoc, setDoc, arrayUnion, arrayRemove } from "firebase/firestore"
import { StringFormat } from "firebase/storage"
//Function to retrive list from Firebase
export async function getlistItems() {
  const docRef = doc(db, "list", "24")
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const theWholeList = docSnap.data()
    return theWholeList.list
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
}
//Retrives order status from Firebase
export async function getStatus() {
  const docRef = doc(db, "list", "24")
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const theWholeList = docSnap.data()
    return theWholeList.isReady
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
}

//Function to add a new item to Firebase List Array
export async function updateListItems(newItem) {
  const docRef = doc(db, "list", "24")

  await updateDoc(docRef, {
    list: arrayUnion(newItem),
  })
}
//Function to remove an item from Firebase List Array
export async function removeListItems(itemToRemove) {
  const docRef = doc(db, "list", "24")
  await updateDoc(docRef, {
    list: arrayRemove(itemToRemove),
  })
}
//Clears list completely.
export async function clearList() {
  const docRef = doc(db, "list", "24")
  await updateDoc(docRef, {
    list: deleteField(StringFormat),
  })
  await setDoc(docRef, {
    list: ["gone"],
  })
}
//Changes to order status updated to Firebase
export async function updateStatus(status) {
  await setDoc(doc(db, "list", "24"), {
    isReady: status,
  })
}
