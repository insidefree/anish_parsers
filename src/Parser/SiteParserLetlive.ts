import SiteParser from './SiteParser'
import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'
import 'core-js/shim'
import "core-js/modules/es7.symbol.async-iterator"


export default class SiteParserLetLive extends SiteParser {
    public static BASE_URL = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged='

    constructor(siteName) {
        super(siteName)
    }

    async start() {
        for await (let item of this.fetchData(3)) {
        }
    }

    async *fetchData(pageCount) {
        let page = 1
        while (page < pageCount) {
            console.log(this.BASE_URL)
            this.driver.get('http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=' + page)
            await this.getData()
                .then(await this.getElements)
            page++
        }
        this.driver.quit()
    }

    getData() {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.driver), 10000)
        })
    }

    handleElem = elem => {
        let obj = {}
        let e1 = elem.findElement(this.By.css('h3 a'))
            .then(name => { return name.getText() })
        let e2 = elem.findElement(this.By.css('.pet-details-age'))
            .then(age => { return age.getText() })
        let e3 = elem.findElement(this.By.css('img'))
            .then(img => { return img.getAttribute('src') })

        this.promise.all([e1, e2, e3])
            .then(values => {
                let obj: any = {}
                obj.name = values[0]
                obj.age = values[1]
                obj.image = values[2]
                console.log(obj)
            })
    }

    async getElements() {
        return new Promise(resolve => {
            let pendingElements = this.driver.findElements(this.By.css(".pet-details"))
            pendingElements
                .then(elements => {
                    // elements.map(elem => {
                    //     let obj = {}
                    //     elem.findElement(By.css('h3 a'))
                    //         .then(name => name.getText()
                    //             .then(name => console.log(name))
                    //         )
                    //     elem.findElement(By.css('.pet-details-age'))
                    //         .then(age => age.getText()
                    //             .then(age => console.log(age))
                    //         )
                    //     elem.findElement(By.css('img'))
                    //         .then(img => img.getAttribute('src')
                    //             .then(img => console.log(img))
                    //         )

                    // })
                    let all_promises = []
                    elements.map(elem => all_promises.push(this.handleElem(elem)))
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