// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz3lo2_3CX6HOOpPPiwBMt9B4CUgwX_JE",
  authDomain: "outcome-2c848.firebaseapp.com",
  projectId: "outcome-2c848",
  storageBucket: "outcome-2c848.appspot.com",
  messagingSenderId: "714562778561",
  appId: "1:714562778561:web:aa5b08b89a143b42996b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

import { doc, getDoc } from "firebase/firestore";

export async function getlistItems() {
  let lists = []
  
  const listsDocs = await getDocs(collection(db, 'list'))
  
  listsDocs.forEach( (listDoc) => {
    lists.push(listDoc.data())
  })

  console.dir(lists)

  return lists[0].list
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