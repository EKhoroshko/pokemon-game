import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCf-lcmD5kNBRfiZ8paKG4Cm02rkH3VsKY",
    authDomain: "pokemon-3f169.firebaseapp.com",
    databaseURL: "https://pokemon-3f169-default-rtdb.firebaseio.com",
    projectId: "pokemon-3f169",
    storageBucket: "pokemon-3f169.appspot.com",
    messagingSenderId: "1042831017000",
    appId: "1:1042831017000:web:6223fdf83a987e3e2d611d"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;