// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCxoMX_roTLwDNJNu_8OQ5XEqvKO_3EcG8",
  authDomain: "netfliclone-94865.firebaseapp.com",
  projectId: "netfliclone-94865",
  storageBucket: "netfliclone-94865.appspot.com",
  messagingSenderId: "711732797651",
  appId: "1:711732797651:web:5681796606d4a2178df426"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)