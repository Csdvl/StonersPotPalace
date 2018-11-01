import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAodW0nupJlfP6SXu3uExyNxlurh3S_Zo",
  authDomain: "stonerspotpalacetest.firebaseapp.com",
  databaseURL: "https://stonerspotpalacetest.firebaseio.com",
  projectId: "stonerspotpalacetest",
  storageBucket: "stonerspotpalacetest.appspot.com",
  messagingSenderId: "917187432986"
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;