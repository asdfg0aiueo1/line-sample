import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMKgzJgd6WXPMU6a5q7WqRGo_SK8Nyfiw",
    authDomain: "line-clone-f36c3.firebaseapp.com",
    projectId: "line-clone-f36c3",
    storageBucket: "line-clone-f36c3.appspot.com",
    messagingSenderId: "942587629001",
    appId: "1:942587629001:web:3c03e4d5fed4f69dd62c18"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };