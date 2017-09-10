export const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyDHKja4zGoInK7D5PsL4MCHAYC2lmvGGPA",
    authDomain: "anish-6cd8e.firebaseapp.com",
    databaseURL: "https://anish-6cd8e.firebaseio.com",
    projectId: "anish-6cd8e",
    // storageBucket: "anish-6cd8e.appspot.com",
    storageBucket: "gs://anish-6cd8e.appspot.com/",
    messagingSenderId: "613075498242"
}

export const firebaseApp = firebase.initializeApp(config)

export const animalsRef = firebase.database().ref('animals')

export const animalsParser = firebase.database().ref('animalsParser')

// Create a root reference

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage()

// Create a storage reference from our storage service
export const storageRef = storage.ref()