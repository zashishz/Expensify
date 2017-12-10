import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCGg5JeWYb6RxvIyMn111Wvuf_O3wAJkYk",
    authDomain: "expensify-3e039.firebaseapp.com",
    databaseURL: "https://expensify-3e039.firebaseio.com",
    projectId: "expensify-3e039",
    storageBucket: "expensify-3e039.appspot.com",
    messagingSenderId: "272164191579"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }