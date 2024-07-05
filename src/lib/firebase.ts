
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjSKRg0SliVaGRCkRLGloThwuAx_5Qcdw",
  authDomain: "social-media-2b42a.firebaseapp.com",
  projectId: "social-media-2b42a",
  storageBucket: "social-media-2b42a.appspot.com",
  messagingSenderId: "594063916016",
  appId: "1:594063916016:web:f4c3c0d2645fe3dfe47b35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)