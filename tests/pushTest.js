var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyDHKja4zGoInK7D5PsL4MCHAYC2lmvGGPA",
    authDomain: "anish-6cd8e.firebaseapp.com",
    databaseURL: "https://anish-6cd8e.firebaseio.com",
    projectId: "anish-6cd8e",
    storageBucket: "anish-6cd8e.appspot.com",
    messagingSenderId: "613075498242"
}

var firebaseApp = firebase.initializeApp(config)
var animalsParser = firebase.database().ref('animalsParser')
var newRef = animalsParser.push().key
animalsParser.child(newRef).set({ 'id': newRef , 'test': 'test'})
