// src/services/authService.ts

import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { auth } from '../firebase';

// 1. Function for User Registration (Sign Up)
export const signUpUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // userCredential.user contains the authenticated user information
    return userCredential.user;
  } catch (error: any) {
    // Re-throw the error to be handled by the component
    throw new Error(error.message); 
  }
};

// 2. Function for User Login (Sign In)
export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// 3. Function for User Logout
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};