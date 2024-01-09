import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAXKgyD9J5f4gLO2A7MHLcKraQdIC7mq38",
    authDomain: "digistore-99d9b.firebaseapp.com",
    databaseURL: "https://digistore-99d9b-default-rtdb.firebaseio.com",
    projectId: "digistore-99d9b",
    storageBucket: "digistore-99d9b.appspot.com",
    messagingSenderId: "430530110113",
    appId: "1:430530110113:web:d1bddb465f1ecc39a206e0",
    measurementId: "G-ZWPLH3V05D"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);