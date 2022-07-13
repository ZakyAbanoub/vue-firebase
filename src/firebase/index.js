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
const booksCollectionRef = collection(db, "books");

//It'll work
export const createBook = (book) => {
  return addDoc(collection(db, "books"), book);
};

export const getBook = async (id) => {
  const docRef = doc(db, "books", id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

//It will work
export const updateBook = (id, book) => {
  const bookRef = doc(db, "books", id);
  return updateDoc(bookRef, book);
};

//It'll work
export const deleteBook = (id) => {
  return deleteDoc(doc(db, "books", id));
};

export const getAllBooks = async () => {
  let books = [];
  const querySnapshot = await getDocs(booksCollectionRef);
  console.log(querySnapshot);
  querySnapshot.docs.forEach((doc) => {
    books.push({ id: doc.id, ...doc.data() });
  });
  return books;
};

// export const getBooks = () => {
//     return booksCollection
// }
