const download = require('image-downloader')
const path = require('path')

// Download to a directory and save with the original filename
// const options = {
//     url: 'http://someurl.com/image.jpg',
//     dest: '/path/to/dest'                  // Save to /path/to/dest/image.jpg
// }

download.image({
    url: 'http://www.letlive.org.il/wp-content/uploads/2017/09/sofer-3-330x330.jpg',
    // url: 'http://theanimaladventurepark.com/wp-content/uploads/wolf.jpg',
    dest: path.join('\downloadedImg')
})
    .then(({ filename, image }) => {
        console.log('File saved to', filename)
    }).catch((err) => {
        throw err
    })