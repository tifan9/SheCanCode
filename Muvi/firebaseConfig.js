// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4iJcvc9VX-fkh3E0qqGMZB8pTVqwduAE",
  authDomain: "muvi-cfe31.firebaseapp.com",
  projectId: "muvi-cfe31",
  storageBucket: "muvi-cfe31.appspot.com",
  messagingSenderId: "408047396150",
  appId: "1:408047396150:web:419f77c1d2b01d60dc7f97"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
