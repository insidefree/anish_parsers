const keyFilename="../anish_parser/src/config/fb_conf.json"; //replace this with api key file
const projectId = "anish-6cd8e" //replace with your project id
const bucketName = `${projectId}.appspot.com`;

const mime = require('mime');
const gcs = require('@google-cloud/storage')({
    projectId,
    keyFilename
});

const bucket = gcs.bucket(bucketName);

const filePath = `./tests/img/test.jpg`;
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