
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyDEcjZGmhZENI2UQVcfQbFDiV7XpCoXppQ",
    authDomain: "portfolio-3703c.firebaseapp.com",
    projectId: "portfolio-3703c",
    storageBucket: "portfolio-3703c.firebasestorage.app",
    messagingSenderId: "131542958779",
    appId: "1:131542958779:web:3fbc5c501c5d37c44c5f9e"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
