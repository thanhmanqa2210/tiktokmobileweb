import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-fS72EngWNgJUxKYOprpL_3RXbSFVxXU",
  authDomain: "tiktok-ebea4.firebaseapp.com",
  projectId: "tiktok-ebea4",
  storageBucket: "tiktok-ebea4.appspot.com",
  messagingSenderId: "307088552318",
  appId: "1:307088552318:web:fde6626f23cddc52dd832f",
  measurementId: "G-F3V80GV1X3",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;
