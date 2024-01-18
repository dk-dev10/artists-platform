import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSA1JRu3SQ6M9wrlGMUgfkmi8AqUHK9I8",
  authDomain: "platform-db-48180.firebaseapp.com",
  projectId: "platform-db-48180",
  storageBucket: "platform-db-48180.appspot.com",
  messagingSenderId: "695527320340",
  appId: "1:695527320340:web:5afc1140096bc350b77001",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);
