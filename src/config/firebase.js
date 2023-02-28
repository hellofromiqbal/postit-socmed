import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9LQmovYmGjGtdR2aFH4qD9Kc8_SoioO4",
  authDomain: "postit-socmed-app.firebaseapp.com",
  projectId: "postit-socmed-app",
  storageBucket: "postit-socmed-app.appspot.com",
  messagingSenderId: "804869242791",
  appId: "1:804869242791:web:f657cafd785340ff734082"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

export { auth, provider, database };