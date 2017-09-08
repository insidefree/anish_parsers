import SiteParser from './SiteParser'
import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'
import 'core-js/shim'
import "core-js/modules/es7.symbol.async-iterator"

// const webdriver = require('selenium-webdriver')
// const driver = new webdriver.Builder()
//     .forBrowser('chrome')
// .build();
// const By = webdriver.By
// const promise = webdriver.promise

export default class SiteParserLetLive extends SiteParser {
    constructor(siteName) {
        super(siteName)
    }

    start() {
        const BASE_LINK = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged='
        let pageNumber = 1

        console.log('start1')
        this.main()
    }

    async *foo() {
        yield "wait..."
        await new Promise(r => setTimeout(r, 2000))
        yield new Promise(r => setTimeout(() => r('okay!'), 2000))
    }

    async main() {
        for await (let item of this.foo()) {
            let result = await item
            console.log(result)
        }
    }

    async fetchData() {
        console.log('start fetch')
        // for await (let driver of this.getData('http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1')) {
        //     console.log(driver)
        //     // driver
        //     //     .then(this.getElements)
        //     //     .catch(this.handleError)
        //     console.log('end driver')
        // }
        console.log('end')
    }

    async getData(link: string) {
        console.log('getData start')
        let readyDriver = await new Promise(r  => setTimeout(() => r(this.driver), 10000))
        // yield await new Promise(r => setTimeout(() => r(this.getElements(readyDriver)), 1000))
        // new Promise((resolve, reject) => {
        //     this.driver.get(link)
        //     setTimeout(() => resolve(this.driver), 10000)
        // })
    }

    handleElem = elem => {
        let obj = {}
        let e1 = elem.findElement(this.By.css('h3 a'))
            .then(name => { return name.getText() })
        let e2 = elem.findElement(this.By.css('.pet-details-age'))
            .then(age => { return age.getText() })
        let e3 = elem.findElement(this.By.css('img'))
            .then(img => { return img.getAttribute('src') })

        // return [e1, e2, e3]

        this.promise.all([e1, e2, e3])
            .then(values => {
                let obj: any = {}
                obj.name = values[0]
                obj.age = values[1]
                obj.image = values[2]
                console.log(obj)
            })

    }

    getElements = (readyDriver) => {
        console.log('getElements **')
        let pendingElements = readyDriver.findElements(this.By.css(".pet-details"))
        pendingElements
            .then(elements => {
                // elements.map(elem => {
                //     let obj = {}
                //     elem.findElement(By.css('h3 a'))
                //         .then(name => name.getText()
                //             .then(name => obj.name = name)
                //         )
                //     elem.findElement(By.css('.pet-details-age'))
                //         .then(age => age.getText()
                //             .then(age => console.log(age))
                //         )
                //     elem.findElement(By.css('img'))
                //         .then(img => img.getAttribute('src')
                //             .then(img => console.log(img))
                //         )

                //     })
                let all_promises = []
                elements.map(elem => all_promises.push(this.handleElem(elem)))
                return all_promises
            })
            .then(() => readyDriver.quit())
        console.log('quit')
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