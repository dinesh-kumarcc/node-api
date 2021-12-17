const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyDE_TNAtfuRX3IauiwtfklZsNf120Y9gWs",
    authDomain: "node-crud-3504f.firebaseapp.com",
    projectId: "node-crud-3504f",
    storageBucket: "node-crud-3504f.appspot.com",
    messagingSenderId: "50050088232",
    appId: "1:50050088232:web:46057decf220577749641d",
    measurementId: "G-ZP9203H6JF"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;