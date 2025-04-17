// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBipaeJ5gsfLwfi7BluQr89AKrdzkMgzLc",
  authDomain: "chc-admin-356b8.firebaseapp.com",
  projectId: "chc-admin-356b8",
  storageBucket: "chc-admin-356b8.firebasestorage.app",
  messagingSenderId: "967547474411",
  appId: "1:967547474411:web:234c6f278ba5d9fac3c9ae",
  measurementId: "G-X2M1QBKKPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
