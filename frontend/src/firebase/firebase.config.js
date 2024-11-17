// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3MSyWWNG7-Ly4-TZyssPxyfCUEnZa-zQ",
  authDomain: "tastetrail-cef01.firebaseapp.com",
  projectId: "tastetrail-cef01",
  storageBucket: "tastetrail-cef01.firebasestorage.app",
  messagingSenderId: "714971177959",
  appId: "1:714971177959:web:4d7d83faa30ac44c9b9342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);