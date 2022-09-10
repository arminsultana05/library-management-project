// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSWB81cVAk1mrViXios3t4WM621GPGr7w",
  authDomain: "library-management-95f5e.firebaseapp.com",
  projectId: "library-management-95f5e",
  storageBucket: "library-management-95f5e.appspot.com",
  messagingSenderId: "938842459359",
  appId: "1:938842459359:web:88b883f27fb5fc5d332d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;