require('chromedriver')
var promise = require('selenium-webdriver').promise
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://yad4.co.il/')


let pendingElements = driver.findElements(By.className('yd-ban-tit'))

pendingElements.then(elements => {
    let pendingHtml = elements.map(elem => {
        return elem.getText()
    })

    promise.all(pendingHtml).then(allHtml => {
        console.log(allHtml)
    })
})

driver.quit()