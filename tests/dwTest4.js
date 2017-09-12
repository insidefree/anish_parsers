var firebase = require('firebase')
var cloudscraper = require('cloudscraper')
var fs = require('fs')
var crypto = require('crypto')
var Jimp = require("jimp")

const config = {
    apiKey: "AIzaSyDHKja4zGoInK7D5PsL4MCHAYC2lmvGGPA",
    authDomain: "anish-6cd8e.firebaseapp.com",
    databaseURL: "https://anish-6cd8e.firebaseio.com",
    projectId: "anish-6cd8e",
    storageBucket: "anish-6cd8e.appspot.com",
    messagingSenderId: "613075498242"
}

cloudscraper.request({
    method: 'GET',
    url: 'http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg',
    encoding: null,
}, function (err, response, body) {
    console.log(response)
    Jimp.read(body, function (err, image) {
        image.write( './tests/img/test.jpg', ()=> {console.log(err)} );
    })
});