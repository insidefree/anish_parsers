var Request = require('delayed-request')(require('request'));
var fs = require('fs');
// request = require('request');


var request = new Request({
    debug: true, // Optional, output delay to console 
    delayMin: 10000,
    delayMax: 10000
});

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        request(uri)
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};



console.log('Run first request');

request.run('http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg', function (err, response) {
    console.log('First request response received');
});

console.log('Run second request');

request.run('http://www.google.com', download('http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg', 'dog.jpg', function () {
    console.log('done');
}));




// download('http://www.letlive.org.il/wp-content/uploads/2017/04/mikel2-330x330.jpg', 'dog.jpg', function () {
//     console.log('done');
// });