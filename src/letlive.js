require('chromedriver')
var promise = require('selenium-webdriver').promise
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

let letlive_urls = [
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1',
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=2'
]
// const URL_BASE = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged='

// const makeUrlsLetlive = (letlive_urls, URL_BASE) => {
//     for (let i = 1; i <= 17; i++) {
//         letlive_urls.push(URL_BASE + i)
//     }
// }

// makeUrlsLetlive(letlive_urls,URL_BASE)

// letlive_urls.map(url => console.log(url))


const getData = link => {
    let driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    return new Promise((resolve, reject) => {
        try {
            driver.get(link)
            setTimeout(() => resolve(driver), 10000)
        }
        catch (error) { reject(error) }
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
            let obj = {}
            obj.name = values[0]
            obj.age = values[1]
            obj.image = values[2]
            console.log(obj)
        })

}

const getElements = driver => {
    let pendingElements = driver.findElements(By.css(".pet-details"))
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

            elements.map(elem => handleElem(elem))
        })
        .then(() => driver.quit())
}

const handleError = (error) => {
    console.log('HandleError: ', error)
}

letlive_urls.map(link => {
    getData(link)
        .then(getElements)
        .catch(handleError)
})