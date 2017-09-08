const webdriver = require('selenium-webdriver')
const By = webdriver.By
const promise = webdriver.promise

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
// console.log(driver)

const BASE_URL = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged='

import 'core-js/shim'
import "core-js/modules/es7.symbol.async-iterator"

async function* foo(pageCount) {
    // yield "wait..."
    // await new Promise(r => setTimeout(r, 1000))
    // yield new Promise(r => setTimeout(() => r('okay!'), 1000))
    // ***
    // await new Promise(r => setTimeout(() => driver.get(BASE_URL), 1))
    // await new Promise(r => setTimeout(() => {
    //     driver.get(BASE_URL)
    //         .then(getElements)
    // }, 1000))
    // ****
    // yield new Promise(resolve => {
    //     driver.get(BASE_URL)
    //     setTimeout(() => {
    //         resolve(driver)
    //     }, 20000)
    // })
    // ***
    // yield new Promise(r => setTimeout(() => driver.get(BASE_URL), 5000))
    let page = 1
    while (page < pageCount) {
        console.log(`start get ${page}`)
        driver.get(BASE_URL + page)
        console.log('start getData')
        let temp = await getData()
            .then(await getElements)
        console.log(`Temp: ${temp}`)
        console.log('end getData')
        console.log('page++')
        page++
    }
    driver.quit()
}

async function main() {
    for await (let item of foo(3)) {
        let result = await item
        // result.get()
        // console.log(result)
    }
}

const getData = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(driver), 10000)
    })
}

async function getElTest() {
    return new Promise(res => {
        setTimeout(() => res('getElTest'), 2000)
    })
}

async function getElements() {
    return new Promise(resolve => {
        console.log('getElements **')
        let pendingElements = driver.findElements(By.css(".pet-details"))
        pendingElements
            .then(elements => {
                elements.map(elem => {
                    let obj = {}
                    elem.findElement(By.css('h3 a'))
                        .then(name => name.getText()
                            .then(name => console.log(name))
                        )
                    elem.findElement(By.css('.pet-details-age'))
                        .then(age => age.getText()
                            .then(age => console.log(age))
                        )
                    elem.findElement(By.css('img'))
                        .then(img => img.getAttribute('src')
                            .then(img => console.log(img))
                        )

                })
                // let all_promises = []
                // elements.map(elem => all_promises.push(this.handleElem(elem)))
                // return all_promises
            })
            // .then(() => driver.quit())
            .then(() => resolve())
        console.log('quit')
    })

}

main()