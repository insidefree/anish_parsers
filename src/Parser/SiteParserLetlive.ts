import SiteParser from './SiteParser'
import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'


export default class SiteParserLetLive extends SiteParser {
    constructor(siteName) {
        super(siteName)
    }

    async fetchData() {
        console.log('start')
        await this.getData('http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1')
            .then(this.getElements)
            .catch(this.handleError)
        console.log('end')
    }

    getData(link: string) {
        return new Promise((resolve, reject) => {
            this.driver.get(link)
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

    getElements = driver => {
        let pendingElements = driver.findElements(this.By.css(".pet-details"))
        pendingElements
            .then(elements => {

                let all_promises = []
                elements.map(elem => all_promises.push(this.handleElem(elem)))
                return all_promises
            })
            .then(() => driver.quit())
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