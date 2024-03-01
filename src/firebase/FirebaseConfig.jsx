// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOtsysidAcJaDbtnEShkw_iMdygMwYUTA",
  authDomain: "myecom-89db1.firebaseapp.com",
  projectId: "myecom-89db1",
  storageBucket: "myecom-89db1.appspot.com",
  messagingSenderId: "824636466731",
  appId: "1:824636466731:web:b5182bd5093a2399a8ac6e",
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };