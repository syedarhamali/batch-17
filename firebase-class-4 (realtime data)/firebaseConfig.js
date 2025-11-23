import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { onSnapshot, getFirestore, setDoc, doc, collection, query, where, getDocs, getDoc, arrayUnion, updateDoc, arrayRemove } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDbpNck3A4VlCeIeCY0IlpHXyKNVNc0vdw",
    authDomain: "smit-users.firebaseapp.com",
    projectId: "smit-users",
    storageBucket: "smit-users.firebasestorage.app",
    messagingSenderId: "788090049512",
    appId: "1:788090049512:web:21e0d58f215a6d89170a5d",
    measurementId: "G-Y3GDE4E2T2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { db, doc, collection, getDocs, getDoc , onSnapshot,query}


