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

// var firebaseApp = firebase.initializeApp(config)
// var storageRef = firebase.storage().ref('images/file_name.jpg')



cloudscraper.request({
    method: 'GET',
    url: 'http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg',
    encoding: null,
}, function (err, response, body) {
    console.log(response)
    // var buf = new Buffer(body)
    // console.log( new Buffer(body, "base64"))
    // fs.writeFile("arghhhh.jpg", body.toString('binary'), function(err) {});
    // var base64Image = new Buffer(body, 'binary').toString('base64');
    // console.log(base64Image)
    // var decodedImage = new Buffer(base64Image, 'base64').toString('binary');
    // console.log(decodedImage)
    // fs.writeFile('image_decoded.jpg', decodedImage, function(err) {});
    Jimp.read(body, function (err, image) {
        // Jimp.MIME_JPEG;
        image.write( './tests/img/test.jpg', ()=> {console.log(err)} );
        // fs.writeFile('image_decoded.jpg', image, function(err) {});
    })
});