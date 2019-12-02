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

export const readFromDatabase = async collectionName => {
  try {
    const collectionRef = firestore.collection(
      `users/defaultUser/${collectionName}`
    );

    const snapshot = await collectionRef.get();
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.log("Error getting documents", error);
  }
};

export const syncWithDatabase = async (collectionName, posts) => {
  try {
    const docsFromDb = await readFromDatabase(collectionName);
    const docIdsFromDb = docsFromDb.map(post => post.id);
    const docIdsFromApp = posts.map(post => post.id);

    // Add to database
    posts.forEach(async post => {
      if (!docIdsFromDb.includes(post.id)) {
        const docRef = firestore.doc(
          `users/defaultUser/${collectionName}/${post.id}`
        );
        await docRef.set(post);
      }
    });

    // Delete from database
    docIdsFromDb.forEach(async docIdDb => {
      if (!docIdsFromApp.includes(docIdDb)) {
        const docRef = firestore.doc(
          `users/defaultUser/${collectionName}/${docIdDb}`
        );
        await docRef.delete();
      }
    });
  } catch (error) {
    console.log("Error in syncing with database", error);
  }
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export default firebase;
