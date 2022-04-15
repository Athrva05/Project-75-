import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyCSdH4er6Y6Dm3QyAzi82UnerXF_p6qYf8",
  authDomain: "pro-71-44b41.firebaseapp.com",
  projectId: "pro-71-44b41",
  storageBucket: "pro-71-44b41.appspot.com",
  messagingSenderId: "173567737907",
  appId: "1:173567737907:web:86304269f6258023912346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
