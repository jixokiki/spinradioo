// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore'; // Jangan lupa import getFirestore
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyDN3ZPShtdUBe-27LhxywLeHrduq2a-v-M",
//   authDomain: "loginspinradio.firebaseapp.com",
//   projectId: "loginspinradio",
//   storageBucket: "loginspinradio.appspot.com",
//   messagingSenderId: "721853601131",
//   appId: "1:721853601131:web:1ca49d5490653d9927a82e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); // Pastikan ini menginisialisasi Firestore dengan app yang benar
// const auth = getAuth(app);
// export { db, auth };


// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore'; // Import Firestore
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"; // Import Auth and GoogleAuthProvider

// // Your Firebase configuration object
// const firebaseConfig = {
//   apiKey: "AIzaSyDN3ZPShtdUBe-27LhxywLeHrduq2a-v-M",
//   authDomain: "loginspinradio.firebaseapp.com",
//   projectId: "loginspinradio",
//   storageBucket: "loginspinradio.appspot.com",
//   messagingSenderId: "721853601131",
//   appId: "1:721853601131:web:1ca49d5490653d9927a82e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app); // Initialize Firestore with the correct app instance

// // Initialize Firebase Authentication
// const auth = getAuth(app);

// // Initialize Google Auth Provider
// const googleProvider = new GoogleAuthProvider(); // Set up Google Auth Provider

// // Export necessary modules for Firebase Authentication and Firestore
// export { db, auth, googleProvider, signInWithPopup, signOut };


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"; // Import Auth and GoogleAuthProvider
import { getStorage } from "firebase/storage"; // Import Storage

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDN3ZPShtdUBe-27LhxywLeHrduq2a-v-M",
  authDomain: "loginspinradio.firebaseapp.com",
  projectId: "loginspinradio",
  storageBucket: "loginspinradio.appspot.com",
  messagingSenderId: "721853601131",
  appId: "1:721853601131:web:1ca49d5490653d9927a82e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore with the correct app instance

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider(); // Set up Google Auth Provider

// Initialize Firebase Storage
const storage = getStorage(app); // Initialize Storage

// Export necessary modules for Firebase Authentication, Firestore, and Storage
export { db, auth, googleProvider, signInWithPopup, signOut, storage };
