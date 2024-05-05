// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhdig9Wtht3Iage3IEUZqhmsPNEz__oVg",
  authDomain: "courses-d08fa.firebaseapp.com",
  projectId: "courses-d08fa",
  storageBucket: "courses-d08fa.appspot.com",
  messagingSenderId: "931378768315",
  appId: "1:931378768315:web:fe4647cfd76a167a14bc9e",
  measurementId: "G-LJBRBG1S9V"
};
export { firebaseConfig };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);