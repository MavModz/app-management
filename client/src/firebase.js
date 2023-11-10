// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/app";
// import { signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAf14IhlHru2IG48k7aGdzROXey6JWpfBU",
  authDomain: "medical-575e7.firebaseapp.com",
  projectId: "medical-575e7",
  storageBucket: "medical-575e7.appspot.com",
  messagingSenderId: "209350263742",
  appId: "1:209350263742:web:1d1010d0c95c29cc8f2fef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth};
export default firebase;