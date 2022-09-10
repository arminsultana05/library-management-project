// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqIY_yPbNmmhJO5DPxh-PSWRGH6vEACqE",
  authDomain: "library-management-b4a55.firebaseapp.com",
  projectId: "library-management-b4a55",
  storageBucket: "library-management-b4a55.appspot.com",
  messagingSenderId: "78183270009",
  appId: "1:78183270009:web:cf5159500082dab9aaf6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;