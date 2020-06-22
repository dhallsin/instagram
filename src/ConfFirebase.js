import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/app';

const config = {
    apiKey: "AIzaSyDyl51XfWRExMOpLLmuzB_3QFMKqFzTLVw",
    authDomain: "insta-fake-a078a.firebaseapp.com",
    databaseURL: "https://insta-fake-a078a.firebaseio.com",
    projectId: "insta-fake-a078a",
    storageBucket: "insta-fake-a078a.appspot.com",
    messagingSenderId: "686550743967",
    appId: "1:686550743967:web:cb697cf52942bc4ffa9baa",
    measurementId: "G-J1BZ14451K"
};
firebase.initializeApp(config);

export default firebase;