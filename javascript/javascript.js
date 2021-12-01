
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf9OblieqT1VsgcIyqAEoj97_jVcWwbSM",
  authDomain: "my-online-yoga.firebaseapp.com",
  projectId: "my-online-yoga",
  storageBucket: "my-online-yoga.appspot.com",
  messagingSenderId: "570693058308",
  appId: "1:570693058308:web:97a91d86e480d9bec5da51",
  measurementId: "G-WFFM7WFWBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);