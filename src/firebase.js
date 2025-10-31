// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByz8dQPIZzHwhmgRX-aFr0hljrJIbHoAo",
  authDomain: "neeyogii.firebaseapp.com",
  projectId: "neeyogii",
  storageBucket: "neeyogii.appspot.com",
  messagingSenderId: "916634546955",
  appId: "1:916634546955:web:4dcb058aeb1c2ff9a7e80e",
  measurementId: "G-MC21E230DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
