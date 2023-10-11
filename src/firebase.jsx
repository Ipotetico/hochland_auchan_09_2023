

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {

    apiKey: "AIzaSyBriiFKY5nZrXWBYpjxJviAr65b9bB_0EE",

    authDomain: "almette-auchan.firebaseapp.com",

    databaseURL: "https://almette-auchan-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "almette-auchan",

    storageBucket: "almette-auchan.appspot.com",

    messagingSenderId: "9355474748",

    appId: "1:9355474748:web:b3421be108fd150bbc5039",

    measurementId: "G-DMJ6JEGR0F"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
