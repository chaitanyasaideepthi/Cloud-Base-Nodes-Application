// firebase.js

import { initializeApp } from 
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from 
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } from 
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your real Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyABdJr0nWhgiN1RA0u0DzYiEaRrDH0i40Y",
  authDomain: "notes-application-8af5b.firebaseapp.com",
  projectId: "notes-application-8af5b",
  storageBucket: "notes-application-8af5b.firebasestorage.app",
  messagingSenderId: "100549767734",
  appId: "1:100549767734:web:985c8dd35f6f9579985e97",
  measurementId: "G-G1K8PWVBBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);