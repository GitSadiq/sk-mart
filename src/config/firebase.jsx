import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  query,
  collection,
  getDocs,
  where,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
    
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl76Yu0E3nfDaZwQiXA8hacCZZI_X_m08",
  authDomain: "msk-mart.firebaseapp.com",
  projectId: "msk-mart",
  storageBucket: "msk-mart.appspot.com",
  messagingSenderId: "445143895103",
  appId: "1:445143895103:web:85cb6b190a0e536f65fc8a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
