import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "****************",
    authDomain: "*******************",
    databaseURL: "**************************",
    projectId: "************************",
    storageBucket: "****************************",
    messagingSenderId: "***********************"
});

export default app;