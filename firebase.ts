// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtmLRqJKKMPRaNlh1bUXLh8DefMvZDPk0",
  authDomain: "qumalaq-73a1a.firebaseapp.com",
  projectId: "qumalaq-73a1a",
  storageBucket: "qumalaq-73a1a.appspot.com",
  messagingSenderId: "439837218439",
  appId: "1:439837218439:web:0c00a21ba8d6398fcf8a22",
  measurementId: "G-ETMZ936PZ8"
};

// Initialize Firebase
// const analytics = firebase.getAnalytics(app);
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;
