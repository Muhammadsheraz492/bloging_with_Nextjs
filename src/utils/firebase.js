// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cybernate-blogs.firebaseapp.com",
  projectId: "cybernate-blogs",
  storageBucket: "cybernate-blogs.appspot.com",
  messagingSenderId: "7912120713",
  appId: "1:7912120713:web:beae89af365dd0da2d0158",
  measurementId: "G-JXM2W51E2Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


 