// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_SGTFpzJSZITVgs8h2bOrCZDp7sY6b-Q",
  authDomain: "vite-contact-d61f6.firebaseapp.com",
  projectId: "vite-contact-d61f6",
  storageBucket: "vite-contact-d61f6.appspot.com",
  messagingSenderId: "779384565358",
  appId: "1:779384565358:web:d43914ebedc0eb74d7807f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);