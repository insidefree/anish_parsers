var fs = require('fs'),
    request = require('request');

function dw(uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        // await new Promise(r => setTimeout(r, 2000))
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

dw('http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg', 'dog.jpg', function () {
    console.log('done');
});