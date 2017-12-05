require('chromedriver')
var promise = require('selenium-webdriver').promise
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;


class Parse {
    constructor() {
        this.links = {}
        this.count = 1
        this.driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build()
    }

    getSetLinks(link, deep) {
        this.driver.get(link)
        let pendingElements = this.driver.findElements(By.tagName('a'))
        pendingElements.then(elements => {
            let pendingHtml = elements.map(elem => {
                return elem.getAttribute("href")
            })
            promise.all(pendingHtml)
                .then(allHtml => {
                    this.links[this.count - 1] = new Set(allHtml)
                    console.log(this.links)
                })
                // .then(() => this.getDeeper(deep))
                .then(() => console.log(this.links))

        })

        this.closeConenction()
    }

    getDeeper(deep) {
        while (this.count < deep) {
            this.links[this.count - 1].forEach(link => {
                this.getSetLinks(link)
            })
            this.count++
        }
        this.count = 1
    }

    closeConenction() {
        this.driver.quit()
    }

}


let ynet = new Parse()
ynet.getSetLinks('http://www.ynet.co.il/', 2)


