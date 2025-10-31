// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

// 🛑 CRITICAL FIX: You must define the firebaseConfig object 
// using the imported environment variables (import.meta.env)
const firebaseConfig = {
    // These keys MUST match the variables in your .env.local file (e.g., VITE_FIREBASE_PROJECT_ID)
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // <-- This was the source of your "projectId not provided" error
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    // Add measurementId if you enabled Google Analytics
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, 
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Auth and other services for use throughout your app
export const db = getFirestore(app);
export const auth = getAuth(app); 

export default app;