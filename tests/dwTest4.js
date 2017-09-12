var firebase = require('firebase')
var cloudscraper = require('cloudscraper')
var fs = require('fs')
var crypto = require('crypto')
var Jimp = require("jimp")
var storage = require('@google-cloud/storage');
var fs = require('fs');

const config = {
    apiKey: "AIzaSyDHKja4zGoInK7D5PsL4MCHAYC2lmvGGPA",
    authDomain: "anish-6cd8e.firebaseapp.com",
    databaseURL: "https://anish-6cd8e.firebaseio.com",
    projectId: "anish-6cd8e",
    storageBucket: "anish-6cd8e.appspot.com",
    messagingSenderId: "613075498242"
}

// cloudscraper.request({
//     method: 'GET',
//     url: 'http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg',
//     encoding: null,
// }, function (err, response, body) {
//     console.log(response)
//     Jimp.read(body, function (err, image) {
//         image.write( './tests/img/test.jpg', ()=> {console.log(err)} );
//     })
// });


// Authenticating on a per-API-basis. You don't need to do this if you auth on a 
// global basis (see Authentication section above). 

var gcs = storage({
 projectId: 'anish-6cd8e',
 keyFilename: config
});

// Create a new bucket. 
gcs.createBucket('my-new-bucket', function(err, bucket) {
 if (!err) {
   // "my-new-bucket" was successfully created. 
 }
});

// Reference an existing bucket. 
var bucket = gcs.bucket('my-existing-bucket');

// Upload a local file to a new file to be created in your bucket. 
bucket.upload('./img/test.jpg', function(err, file) {
 if (!err) {
   // "zebra.jpg" is now in your bucket. 
 }
});

// Download a file from your bucket. 
bucket.file('test.jpg').download({
 destination: './photos/zoo/test.jpg'
}, function(err) {});

// Streams are also supported for reading and writing files. 
var remoteReadStream = bucket.file('test.jpg').createReadStream();
var localWriteStream = fs.createWriteStream('./photos/zoo/test.jpg');
remoteReadStream.pipe(localWriteStream);

var localReadStream = fs.createReadStream('/photos/zoo/zebra.jpg');
var remoteWriteStream = bucket.file('zebra.jpg').createWriteStream();
localReadStream.pipe(remoteWriteStream);