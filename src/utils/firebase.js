// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdfhPXaDQmKXIm_xhazalAgjHsY2qXXRQ",
  authDomain: "netflix-e28bf.firebaseapp.com",
  projectId: "netflix-e28bf",
  storageBucket: "netflix-e28bf.firebasestorage.app",
  messagingSenderId: "71495972067",
  appId: "1:71495972067:web:57d10ac9135705524041d6",
  measurementId: "G-W7XJKRXQRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();