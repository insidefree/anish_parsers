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

export default class SiteParserLetLive extends SiteParser {
    static getData
    static getElements
    static handleElem

    constructor(siteName) {
        super(siteName)
    }

    async fetchData() {
        let page = 1
        while (page < 3) {
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
                        let e3 = elem.findElement(By.css('img'))
                            .then(img => { return img.getAttribute('src') })

                        promise.all([e1, e2, e3])
                            .then(values => {
                                let obj: any = {}
                                obj.images = []
                                obj.name = values[0]
                                obj.age = values[1]
                                obj.images.push(values[2])
                                console.log(obj)
                                animalsRef.push(obj)
                            })

                    })
                    // let all_promises = []
                    // elements.map(elem => all_promises.push(this.handleElem(elem)))
                })
                .then(() => resolve())
        })
    }

    handleError = (error) => {
        console.log('HandleError: ', error)
    }

    commonFuncTEST(val: string) {
        let obj = { name: "", age: 13 }
        obj.name = val
        return obj
    }
}