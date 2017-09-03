require('chromedriver')
var promise = require('selenium-webdriver').promise
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

let letlive_urls = [
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1',
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=2'
]

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

const getElements = driver => {
    let pendingElements = driver.findElements(By.css(".pet-details"))
    pendingElements
        .then(elements => {
            elements.map(elem => elem.findElement(By.css('h3 a'))
                .then(name => name.getText()
                    .then(name => console.log(name))
                ))
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