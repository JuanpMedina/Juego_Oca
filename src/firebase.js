// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAepucn90dp22AxapojCVVTm_YAebACMKI",
    authDomain: "react-app-a9e1e.firebaseapp.com",
    projectId: "react-app-a9e1e",
    storageBucket: "react-app-a9e1e.appspot.com",
    messagingSenderId: "513620274225",
    appId: "1:513620274225:web:4ba6d82c74967e50fbb910",
    measurementId: "G-Z5FMWKQ9MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//initialize Auth

const auth = getAuth(app);
export { auth };