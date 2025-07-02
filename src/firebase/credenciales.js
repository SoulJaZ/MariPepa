// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnXXRnRA35QtXL3MJ0H3Z4VAGqQAgdeoo",
  authDomain: "mari-pepa.firebaseapp.com",
  projectId: "mari-pepa",
  storageBucket: "mari-pepa.firebasestorage.app",
  messagingSenderId: "745788180745",
  appId: "1:745788180745:web:f6a3aa2b565f122722abd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)