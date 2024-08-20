// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDpTWY6kA9jkyzp8kBnmEgG4eaDLaOYWMo",
//   authDomain: "realestate-dream-project-a9.firebaseapp.com",
//   projectId: "realestate-dream-project-a9",
//   storageBucket: "realestate-dream-project-a9.appspot.com",
//   messagingSenderId: "499795078748",
//   appId: "1:499795078748:web:db05df733188c8cd5cc099"

apiKey:import.meta.env.VITE_APIKEY,
authDomain:import.meta.env.VITE_AUTHDOMAIN,
projectId:import.meta.env.VITE_PROJECTID,
storageBucket:import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);