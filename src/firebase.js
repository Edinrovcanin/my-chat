// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGa21mrSvMhfWFyIakc8UzTKG3DTUlxHA",
  authDomain: "my-c-b4800.firebaseapp.com",
  projectId: "my-c-b4800",
  storageBucket: "my-c-b4800.appspot.com",
  messagingSenderId: "238886635385",
  appId: "1:238886635385:web:194cf164d28b2b091451a8",
  measurementId: "G-FZDZ2NGKG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
