// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiFs6NtOsLi0FfN1aDHUfIpy7rO59WCLY",
  authDomain: "ema-john-firebase-app.firebaseapp.com",
  projectId: "ema-john-firebase-app",
  storageBucket: "ema-john-firebase-app.appspot.com",
  messagingSenderId: "994143487617",
  appId: "1:994143487617:web:bbded4f0c7b4ef9f5d6f80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;