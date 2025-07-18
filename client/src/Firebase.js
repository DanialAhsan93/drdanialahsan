import dotenv from 'dotenv';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "danialahsan-8b4d2.firebaseapp.com",
  projectId: "danialahsan-8b4d2",
  storageBucket: "danialahsan-8b4d2.firebasestorage.app",
  messagingSenderId: "69133751635",
  appId: "1:69133751635:web:eb0dfd927350ecbe547da6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);