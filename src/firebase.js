import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
   apiKey: "AIzaSyCGXEDDi1RfWdcXqb9CQGZNOVOPA76cMc4",
   authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.REACT_FIREBASE_PROJECT_ID,
   storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.REACT_FIREBASE_APP_ID
});


export const auth = app.auth();

export const authUser = firebase.auth().currentUser;

export default app;