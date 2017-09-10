"use strict";
exports.__esModule = true;
exports.firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDHKja4zGoInK7D5PsL4MCHAYC2lmvGGPA",
    authDomain: "anish-6cd8e.firebaseapp.com",
    databaseURL: "https://anish-6cd8e.firebaseio.com",
    projectId: "anish-6cd8e",
    // storageBucket: "anish-6cd8e.appspot.com",
    storageBucket: "gs://anish-6cd8e.appspot.com/",
    messagingSenderId: "613075498242"
};
exports.firebaseApp = exports.firebase.initializeApp(config);
exports.animalsRef = exports.firebase.database().ref('animals');
exports.animalsParser = exports.firebase.database().ref('animalsParser');
// Create a root reference
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = exports.firebase.storage();
// Create a storage reference from our storage service
exports.storageRef = storage.ref();
