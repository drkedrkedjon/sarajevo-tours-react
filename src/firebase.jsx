import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCHxAlF3ScJqoNTkEl4uGF6mGpplSSChS4",
  authDomain: "sarajevo-tours-83926.firebaseapp.com",
  projectId: "sarajevo-tours-83926",
  storageBucket: "sarajevo-tours-83926.appspot.com",
  messagingSenderId: "205298871197",
  appId: "1:205298871197:web:d1100f4eb501f9c3b35d74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const productsRef = collection(db, "products");
export const skiQuery = query(
  collection(db, "products"),
  where("category", "==", "ski")
);
export const bikeQuery = query(
  collection(db, "products"),
  where("category", "==", "biking")
);
export const walkQuery = query(
  collection(db, "products"),
  where("category", "==", "walking")
);

export async function getProducts(query) {
  const querySnapshot = await getDocs(query);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
}
