// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUJTHrCYQgEYVcvPdQcw5Cl4dWk9QDAls",
  authDomain: "tienda-de-mascotas-b9518.firebaseapp.com",
  projectId: "tienda-de-mascotas-b9518",
  storageBucket: "tienda-de-mascotas-b9518.firebasestorage.app",
  messagingSenderId: "256260327993",
  appId: "1:256260327993:web:e1cb2dafd547fa03cc5be8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
