var firebase = require('firebase')

const config = {
    apiKey: "AIzaSyDHKja4zGoInK7D5PsL4MCHAYC2lmvGGPA",
    authDomain: "anish-6cd8e.firebaseapp.com",
    databaseURL: "https://anish-6cd8e.firebaseio.com",
    projectId: "anish-6cd8e",
    storageBucket: "anish-6cd8e.appspot.com",
    messagingSenderId: "613075498242"
}

module.exports = firebaseApp = firebase.initializeApp(config)

module.exports = animalsRef = firebase.database().ref('animals2')