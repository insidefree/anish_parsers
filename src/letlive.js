require('chromedriver')
var promise = require('selenium-webdriver').promise
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

let letlive_urls = [
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1',
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=2'
]

const URL_BASE = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged='

function fetchLinks() {
    let driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    let urls = []
    let page = 1
    let elem = true
    while (page <2) {
        driver.get(URL_BASE + page)
        setTimeout(() => {
            driver.findElements(By.css(".pet-details"))
                .then(elem => {elem.length ? urls.push(URL_BASE + page) : elem = false})
                .then(() => driver.quit())
        }, 15000)
        page++
    }

    urls.map(el => console.log(el))
    // return new Promise((resolve, reject) => {

    // })
    // console.log('call getPage');

    // driver.get(url + page);
    // driver.findElements(By.css(".pet-details")).then(function (petDets) {
    //     console.log(petDets.length);
    //     if (!petDets.length) {
    //         console.log('no such page');
    //         return;
    //     }

    //     getPetDetails(petDets);
    //     page++;
    // });
}

fetchLinks()

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
            elements.map(elem => {
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
        })
        .then(() => driver.quit())
}

const handleError = (error) => {
    console.log('HandleError: ', error)
}

// letlive_urls.map(link => {
//     getData(link)
//         .then(getElements)
//         .catch(handleError)
// })