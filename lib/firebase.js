// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOhP5iagWjEy49jWrYDdbB5oCqMuZ8ktQ",
  authDomain: "cryptic-genre-340702.firebaseapp.com",
  projectId: "cryptic-genre-340702",
  storageBucket: "cryptic-genre-340702.appspot.com",
  messagingSenderId: "870493488555",
  appId: "1:870493488555:web:a71fbbd01f24c6f693feee",
  measurementId: "G-8NXZQH3S5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
