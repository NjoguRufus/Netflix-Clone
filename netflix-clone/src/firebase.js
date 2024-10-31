// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQgzzaho2jPHNls7lc-L-N51p5WdV-Fi0",
  authDomain: "njogus-56d1e.firebaseapp.com",
  projectId: "njogus-56d1e",
  storageBucket: "njogus-56d1e.appspot.com",
  messagingSenderId: "772239554947",
  appId: "1:772239554947:web:26f689b84c889fb0b89eb6",
  measurementId: "G-W26147HCM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);
export { auth };
