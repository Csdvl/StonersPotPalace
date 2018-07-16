import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMzDEx-FbiElwQmCC69vWuAWOCmHeLZ4U",
  authDomain: "stonerspotpalace-s4w20.firebaseapp.com",
  databaseURL: "https://stonerspotpalace-s4w20.firebaseio.com",
  projectId: "stonerspotpalace-s4w20",
  storageBucket: "stonerspotpalace-s4w20.appspot.com",
  messagingSenderId: "433819605376"
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;