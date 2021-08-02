import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5PUmNvB_InAzLZ_lM757Gh4yX_eemM8Y",
  authDomain: "linkedin-clone-8394b.firebaseapp.com",
  projectId: "linkedin-clone-8394b",
  storageBucket: "linkedin-clone-8394b.appspot.com",
  messagingSenderId: "91078777149",
  appId: "1:91078777149:web:edbbc733b61578972a0d54",
  measurementId: "G-WWYLWGVDE7",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
