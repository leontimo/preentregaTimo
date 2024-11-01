import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBl5mukOG2dn8K78yD1GMixAJIOqgrxCrg",
    authDomain: "ecommerce-proyecto-final-8e826.firebaseapp.com",
    projectId: "ecommerce-proyecto-final-8e826",
    storageBucket: "ecommerce-proyecto-final-8e826.appspot.com",
    messagingSenderId: "882032974692",
    appId: "1:882032974692:web:acdfbf088fd68b20857871"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };