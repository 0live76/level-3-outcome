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

export async function updateListItems(newItem) {
  const docRef = doc(db, "list", "24")

  await updateDoc(docRef, {
    list: arrayUnion(newItem),
  })
}
export async function removeListItems(itemToRemove) {
  const docRef = doc(db, "list", "24")
  await updateDoc(docRef, {
    list: arrayRemove(itemToRemove),
  })
}
export async function clearList() {
  await setDoc(doc(db, "list", "24"), {
    list: [],
  })
}
export async function updateStatus(status) {
  await setDoc(doc(db, "list", "24"), {
    isReady: status,
  })
}

// export async function getlistItems2() {
//   console.debug('Starting the getList function...')
//   let listItems = []

//   const listItemsDocs = await getDocs(collection(db, 'list'))

//   listItemsDocs.forEach( (listItemDoc) => {
//     listItems.push(listItemDoc.data())
//   })

//   console.debug('Ending the getList function...')
//     return listItems
//   }
