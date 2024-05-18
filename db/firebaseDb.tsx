import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


 
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "yung-e205a.firebaseapp.com",
  projectId: "yung-e205a",
  storageBucket: "yung-e205a.appspot.com",
  messagingSenderId: "544533751717",
  appId: "1:544533751717:web:92afcf4c182cc653ccaa4c",
  measurementId: "G-MQYQTSHX83"
};


// Initialize Firebase
export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const myAuth = () => getAuth(app);
const myStorage = () => getStorage(app);
const myDb = () => getFirestore(app);

export const auth = myAuth();
export const storage = myStorage();
export const db = myDb();
