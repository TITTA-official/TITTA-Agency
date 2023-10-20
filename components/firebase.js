import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrSHFuXcUwCSNddFaWRkSJMtdfUBpXjcY",
  authDomain: "titta-s-contacts.firebaseapp.com",
  projectId: "titta-s-contacts",
  storageBucket: "titta-s-contacts.appspot.com",
  messagingSenderId: "216447438884",
  appId: "1:216447438884:web:7b396d764a251b21b7c8b1",
  measurementId: "G-Q25HR6WHFL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);