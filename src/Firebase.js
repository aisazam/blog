// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCutaqTZDVepdbisXAyDszWlYw9qNlRYvw",
  authDomain: "blogproducts-ab366.firebaseapp.com",
  projectId: "blogproducts-ab366",
  storageBucket: "blogproducts-ab366.firebasestorage.app",
  messagingSenderId: "314264768335",
  appId: "1:314264768335:web:287869fda555acf70abf3a",
  measurementId: "G-9XJBP3DQBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth
const auth = getAuth(app);

export { auth };
// Initialize Firestore
export const db = getFirestore(app);
