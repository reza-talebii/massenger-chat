// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBiagAumFD1KGBVGd5YFBw__l5RLgSTxi8",
    authDomain: "chat-messenger-b12eb.firebaseapp.com",
    projectId: "chat-messenger-b12eb",
    storageBucket: "chat-messenger-b12eb.appspot.com",
    messagingSenderId: "395733853669",
    appId: "1:395733853669:web:20b03d09626cf1ca737b0c",
  })
  .auth();
