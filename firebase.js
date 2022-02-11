// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { useSelector } from "react-redux";



const firebaseApp = initializeApp({
  apiKey: "AIzaSyBTYFlG9uL1Ork3tU5WtFpWoyeGUKmOt5A",
  authDomain: "rn-uber-eat-clone-5433d.firebaseapp.com",
  projectId: "rn-uber-eat-clone-5433d",
  storageBucket: "rn-uber-eat-clone-5433d.appspot.com",
  messagingSenderId: "6810159244",
  appId: "1:6810159244:web:a17c3508e7fba60f09d3a9"
});

const db = getFirestore();
// export default Firebase;

try {
  const docRef = await addDoc(orders(db, "users"), {
    items: items
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}