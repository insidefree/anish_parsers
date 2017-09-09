var firebase = require('firebase')

const config = {
    apiKey: "AIzaSyDHKja4zGoInK7D5PsL4MCHAYC2lmvGGPA",
    authDomain: "anish-6cd8e.firebaseapp.com",
    databaseURL: "https://anish-6cd8e.firebaseio.com",
    projectId: "anish-6cd8e",
    storageBucket: "anish-6cd8e.appspot.com",
    messagingSenderId: "613075498242"
}

export const firebaseApp = firebase.initializeApp(config)

export const animalsRef = firebase.database().ref('animals')

export const animalsParser = firebase.database().ref('animalsParser')

// Create a root reference
export const storageRef = firebase.storage().ref()
