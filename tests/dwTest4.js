var firebase = require('firebase')
var cloudscraper = require('cloudscraper')
var fs = require('fs')
var crypto = require('crypto')
var Jimp = require("jimp")
var storage = require('@google-cloud/storage');
var fs = require('fs');

var admin = require("firebase-admin");

var serviceAccount = require('../src/config/fb_conf.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://anish-6cd8e.firebaseio.com"
});



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

