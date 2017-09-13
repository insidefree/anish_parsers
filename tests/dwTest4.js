var firebase = require('firebase')
var cloudscraper = require('cloudscraper')
var Jimp = require("jimp")
var storage = require('@google-cloud/storage');
var admin = require("firebase-admin");
var serviceAccount = require('../src/config/fb_conf.json');

const keyFilename = "../anish_parser/src/config/fb_conf.json"; //replace this with api key file
const projectId = "anish-6cd8e" //replace with your project id
const bucketName = `${projectId}.appspot.com`;

const mime = require('mime');
const gcs = require('@google-cloud/storage')({
    projectId,
    keyFilename
});

const bucket = gcs.bucket(bucketName);

const filePath = `./img/test.jpg`;
const uploadTo = `images/test.jpg`;
const fileMime = mime.lookup(filePath);

bucket.upload(filePath, {
    destination: uploadTo,
    public: true,
    metadata: { contentType: fileMime, cacheControl: "public, max-age=300" }
}, function (err, file) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(createPublicFileURL(uploadTo));
});

function createPublicFileURL(storageName) {
    return `http://storage.googleapis.com/${bucketName}/${encodeURIComponent(storageName)}`;

}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://anish-6cd8e.firebaseio.com"
});

function wrap() {
    return new Promise((resolve, reject) => {
        cloudscraper.request({
            method: 'GET',
            url: 'http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg',
            encoding: null,
        }, function (err, response, body) {
            // console.log(response)
            Jimp.read(body, function (err, image) {
                console.log('start write')
                image.write('./tests/img/test.jpg', () => { resolve('done') })
            })
        })
    })
}

cloudscraper.request({
    method: 'GET',
    url: 'http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg',
    encoding: null,
}, function (err, response, body) {
    console.log(response)
    Jimp.read(body, function (err, image) {
        image.write('./tests/img/test.jpg', () => { console.log('error:', err) });
    })
})


wrap()
    .then(msg => console.log(msg))