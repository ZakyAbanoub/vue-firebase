import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
// Follow this pattern to import other Firebase services

const firebaseConfig = {
  apiKey: "AIzaSyBD0CmPQaNHcInpbx90dkeBuThqmtnHJO8",
  authDomain: "vue-firebase-1822a.firebaseapp.com",
  projectId: "vue-firebase-1822a",
  storageBucket: "vue-firebase-1822a.appspot.com",
  messagingSenderId: "444714113700",
  appId: "1:444714113700:web:725fe1aaacbd1added6431",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// All Collections refs
// export const booksCollection = doc(db, "books");

//My Functions
// const booksCollectionRef = collection(db, "books");

export const create = (collectionRef, obj) => {
  return addDoc(collection(db, collectionRef), obj);
};

export const get = async (collectionRef, id) => {
  const docRef = doc(db, collectionRef, id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

//It will work
export const update = (collectionRef, id, book) => {
  const bookRef = doc(db, collectionRef, id);
  return updateDoc(bookRef, book);
};

//It'll work
export const remove = (collectionRef, id) => {
  return deleteDoc(doc(db, collectionRef, id));
};

export const search = async (collectionRef) => {
  let arr = [];
  const querySnapshot = await getDocs(collection(db, collectionRef));
  console.log(querySnapshot);
  querySnapshot.docs.forEach((doc) => {
    arr.push({ id: doc.id, ...doc.data() });
  });
  console.log(arr);
  return arr;
};

// export const getBooks = () => {
//     return booksCollection
// }
