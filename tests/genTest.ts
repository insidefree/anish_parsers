import 'core-js/shim'
import "core-js/modules/es7.symbol.async-iterator"

const webdriver = require('selenium-webdriver')
const By = webdriver.By
const promise = webdriver.promise

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const BASE_URL = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged='


async function* foo(pageCount) {
    let temp = 1
    while (temp < pageCount) {
        yield "wait..."
        await new Promise(r => setTimeout(r, 1000))
        yield new Promise(r => setTimeout(() => r('okay!'), 1000))
        await new Promise(r => setTimeout(r, 2000))
        yield "2000..."
        yield new Promise(r => setTimeout(() => r('okay!'), 1000))
        temp++
    }

    // ***

    // let page = 1
    // while (page < pageCount) {
    //     console.log(`start get ${page}`)
    //     driver.get(BASE_URL + page)
    //     console.log('start getData')
    //     await getData()
    //         .then(await getElements)
    //     console.log('end getData')
    //     console.log('page++')
    //     page++
    // }
    // driver.quit()
}

async function main() {
    for await (let item of foo(3)) {
        console.log(item)
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

const handleElem = elem => {
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
            obj.name = values[0]
            obj.age = values[1]
            obj.image = values[2]
            console.log(obj)
        })

}

async function getElements() {
    return new Promise(resolve => {
        console.log('getElements **')
        let pendingElements = driver.findElements(By.css(".pet-details"))
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
                elements.map(elem => all_promises.push(handleElem(elem)))
            })
            .then(() => resolve())
        console.log('quit')
    })

}

main()