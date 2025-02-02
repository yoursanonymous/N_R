// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuKhbtlCaDeqCggdYr4-94q3-u62mUNfE",
  authDomain: "netflix-a0805.firebaseapp.com",
  projectId: "netflix-a0805",
  storageBucket: "netflix-a0805.firebasestorage.app",
  messagingSenderId: "429038364928",
  appId: "1:429038364928:web:f93e60a43a2018b879ebe5",
  measurementId: "G-D8FBH0DL5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
