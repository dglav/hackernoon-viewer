import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCWLmJrw_OOwQ5mpoh3y6NtSw51xOU0WiU",
  authDomain: "hackernoon-viewer.firebaseapp.com",
  databaseURL: "https://hackernoon-viewer.firebaseio.com",
  projectId: "hackernoon-viewer",
  storageBucket: "hackernoon-viewer.appspot.com",
  messagingSenderId: "863046137003",
  appId: "1:863046137003:web:ce7a7821f70986e946b3ee"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
