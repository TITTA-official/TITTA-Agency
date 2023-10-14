import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-P2HacDMN41K0dJKraopQwzBUPoxCyFo",
  authDomain: "titta-contacts.firebaseapp.com",
  projectId: "titta-contacts",
  storageBucket: "titta-contacts.appspot.com",
  messagingSenderId: "124823311119",
  appId: "1:124823311119:web:cb56f35d825d1bb249a47a",
  measurementId: "G-GXGHSQ5ET1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);