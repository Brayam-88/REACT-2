import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCclV6ESMzetYP-mXLgtqt7Se4Ocmr_CBg",
  authDomain: "burzaco-market.firebaseapp.com",
  projectId: "burzaco-market",
  storageBucket: "burzaco-market.appspot.com",
  messagingSenderId: "696432042806",
  appId: "1:696432042806:web:1bf7a6f877815de1cbc997"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);