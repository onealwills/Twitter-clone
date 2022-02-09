import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-T3_vHkBYxoeuDGV63SF4BZlNCG5bnFw",
  authDomain: "twitter-clone-4d540.firebaseapp.com",
  projectId: "twitter-clone-4d540",
  storageBucket: "twitter-clone-4d540.appspot.com",
  messagingSenderId: "162968778992",
  appId: "1:162968778992:web:77460bae77ea073353ea35",
  measurementId: "G-G8X2BWZ69H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
