var request = require('request');
var fs = require('fs');
var rp = require('request-promise');

// request('http://www.google.com', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred 
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//     console.log('body:', body); // Print the HTML for the Google homepage. 
// });

// request('http://r.ddmcdn.com/w_830/s_f/o_1/cx_98/cy_0/cw_640/ch_360/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg').pipe(fs.createWriteStream('lion.jpg'))



// request.get('http://www.letlive.org.il/wp-content/uploads/2016/03/tosli-330x330.jpg')
//     .pipe(setTimeout(() => {
//         console.log('started st')
//         fs.createWriteStream('test.jpg')
//     }, 10000))

rp('https://www.google.co.il/?gfe_rd=cr&dcr=0&ei=QUC1WfCgHaTb8AfRooDYDQ&gws_rd=ssl')
    .then(setTimeout(() => {console.log('sadfsdfsdf') }, 10000))
    .then(function (htmlString) {
        console.log(htmlString)
    })
    .catch(function (err) {
        // Crawling failed... 
    });