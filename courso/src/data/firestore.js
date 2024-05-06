// firestore.js

import { getFirestore } from 'firebase/firestore';
import app from './firebaseconfig ';

const firestore = getFirestore(app);

export default firestore;
