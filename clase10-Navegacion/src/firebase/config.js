import firebase from 'firebase';
import app from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA4F_RzEFlUjN_VBlkZQOtj4ZRgFp5qXgM",
  authDomain: "proyectofirebase-clase11.firebaseapp.com",
  projectId: "proyectofirebase-clase11",
  storageBucket: "proyectofirebase-clase11.firebasestorage.app",
  messagingSenderId: "145576726346",
  appId: "1:145576726346:web:cbcc1aa25e4ed99c07bbb3"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();




