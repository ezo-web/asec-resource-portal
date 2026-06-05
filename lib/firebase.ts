// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzEheI8leFEtsXbCY6xk34bPncYwPBFGs",
  authDomain: "asec-15000.firebaseapp.com",
  projectId: "asec-15000",
  storageBucket: "asec-15000.firebasestorage.app",
  messagingSenderId: "1075058390344",
  appId: "1:1075058390344:web:218e3b7887e6eee90def7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;