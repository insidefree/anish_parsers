import SiteParser from './SiteParser'
import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'

// config
import { animalsRef } from '../config/firebase'

const webdriver = require('selenium-webdriver')
const By = webdriver.By
const promise = webdriver.promise

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// download image
var cloudscraper = require('cloudscraper')
var Jimp = require("jimp")
var storage = require('@google-cloud/storage');
var serviceAccount = require('../config/fb_conf.json');

// upload image
const keyFilename = "./src/config/fb_conf.json"; //replace this with api key file
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



export default class SiteParserLetLive extends SiteParser {
    static getData
    static getElements
    static handleElem

    constructor(siteName) {
        super(siteName)
    }

    async fetchData() {
        let page = 1
        while (page <= 3) {
            console.log(`start get ${page}`)
            driver.get('http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=' + page)
            console.log('start getData')
            await this.getData()
                .then(await this.getElements)
            console.log('end getData')
            console.log('page++')
            page++
        }
        driver.quit()
    }

    getData() {
        return new Promise(resolve => {
            setTimeout(() => resolve(driver), 10000)
        })
    }

    // async handleElem(elem) {
    //     return new Promise(resolve => {
    //         let obj = {}
    //         let e1 = elem.findElement(By.css('h3 a'))
    //             .then(name => { return name.getText() })
    //         let e2 = elem.findElement(By.css('.pet-details-age'))
    //             .then(age => { return age.getText() })
    //         let e3 = elem.findElement(By.css('img'))
    //             .then(img => { return img.getAttribute('src') })

    //         promise.all([e1, e2, e3])
    //             .then(values => {
    //                 let obj: any = {}
    //                 obj.name = values[0]
    //                 obj.age = values[1]
    //                 obj.image = values[2]
    //                 resolve(() => console.log(obj))
    //             })
    //     })
    // }

    async getElements() {
        return new Promise(resolve => {
            console.log('getElements **')
            let pendingElements = driver.findElements(By.css(".pet-details"))
            pendingElements
                .then(elements => {
                    elements.map(elem => {
                        // let obj = {}
                        // elem.findElement(By.css('h3 a'))
                        //     .then(name => name.getText()
                        //         .then(name => console.log(name))
                        //     )
                        // elem.findElement(By.css('.pet-details-age'))
                        //     .then(age => age.getText()
                        //         .then(age => console.log(age))
                        //     )
                        // elem.findElement(By.css('img'))
                        //     .then(img => img.getAttribute('src')
                        //         .then(img => console.log(img))
                        //     )
                        let obj = {}
                        let e1 = elem.findElement(By.css('h3 a'))
                            .then(name => { return name.getText() })
                        let e2 = elem.findElement(By.css('.pet-details-age'))
                            .then(age => { return age.getText() })
                        let e3 = elem.findElement(By.css('.pet-execrpt'))
                            .then(desc => {return desc.getText()})
                        let e4 = elem.findElement(By.css('img'))
                            .then(img => img.getAttribute('src'))
                            .then(SiteParserLetLive.dwImage)
                            .then(SiteParserLetLive.upImage)
                            .then(publicFileURL => {
                                return new Promise(resolve => {
                                    resolve(publicFileURL)
                                })
                            })
                        var newRef = animalsRef.push().key
                        promise.all([e1, e2, e3, e4])
                            .then(values => {
                                let obj: any = {}
                                obj.age = {}
                                obj.id = newRef
                                obj.images = []
                                obj.name = values[0]
                                obj.age.str = values[1]
                                obj.age.num = values[1]
                                obj.description = values[2]
                                obj.images.push(values[3])
                                console.log(obj)
                                animalsRef.child(newRef).set(obj)
                            })
                    })
                    // let all_promises = []
                    // elements.map(elem => all_promises.push(this.handleElem(elem)))
                })
                .then(() => resolve())
        })
    }

    downloadIMG(link) {
        console.log('dw img')
        return link
    }

    handleError = (error) => {
        console.log('HandleError: ', error)
    }

    commonFuncTEST(val: string) {
        let obj = { name: "", age: 13 }
        obj.name = val
        return obj
    }

    static dwImage(link) {
        return new Promise(resolve => {
            cloudscraper.request({
                method: 'GET',
                url: link,
                encoding: null,
            }, function (err, response, body) {
                // console.log(response)
                Jimp.read(body, function (err, image) {
                    let name = link.split('/').pop()
                    image.write(`./tmp/img/${name}`, () => { resolve(`./tmp/img/${name}`) })
                })
            })
        })
    }

    static upImage(filePath) {
        return new Promise(resolve => {
            console.log(filePath)
            let uploadTo = 'images/' + filePath.split('/').pop()
            console.log(uploadTo)
            bucket.upload(filePath, {
                destination: uploadTo,
                public: true,
                metadata: { contentType: fileMime, cacheControl: "public, max-age=300" }
            }, function (err, file) {
                if (err) {
                    console.log('uploadErr: ', err);
                    return;
                }
                resolve(`http://storage.googleapis.com/${bucketName}/${encodeURIComponent(uploadTo)}`)
            });
        })
    }
}