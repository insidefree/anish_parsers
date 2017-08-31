require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://yad4.co.il/');

var promise = require('selenium-webdriver').promise;

var pendingElements = driver.findElements(By.className('yd-ban-tit'))

pendingElements.then(function (elements) {
    var pendingHtml = elements.map(function (elem) {
        return elem.getText();
    });

    promise.all(pendingHtml).then(function (allHtml) {
        console.log(allHtml)
    });
});

driver.quit();