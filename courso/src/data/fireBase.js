// firebase.js
import firebase from 'firebase/app';
import 'firebase/database'; // Import only the database module if that's all you need

const firebaseConfig = {
  // Paste your Firebase configuration object here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
