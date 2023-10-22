import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAesPAXeZWicmrQzkfmDSDOJh9eIOQ-JzM",
  authDomain: "donkey-tutorial.firebaseapp.com",
  projectId: "donkey-tutorial",
  storageBucket: "donkey-tutorial.appspot.com",
  messagingSenderId: "147847953873",
  appId: "1:147847953873:web:039c17e1d02fb5a80ab4f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
