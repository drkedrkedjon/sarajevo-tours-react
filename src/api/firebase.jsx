import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

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

const productsRef = collection(db, "products");

export async function getProducts() {
  try {
    const querySnapshot = await getDocs(productsRef);
    const dataArr = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return dataArr;
  } catch (err) {
    console.log(err);
  }
}
