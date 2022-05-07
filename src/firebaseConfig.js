// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeR8xU3hUvkLiGoCPlNf5bo2vS_UnGMng",
  authDomain: "time-sheet-5e7d4.firebaseapp.com",
  projectId: "time-sheet-5e7d4",
  storageBucket: "time-sheet-5e7d4.appspot.com",
  messagingSenderId: "770377677768",
  appId: "1:770377677768:web:364768b9267f5ce9a1defd"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db= app.firestore();