"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
// var promise = require('selenium-webdriver').promise
var selenium_webdriver_2 = require("selenium-webdriver");
// var webdriver = require('selenium-webdriver'),
var By = selenium_webdriver_2.webdriver.By;
var letlive_urls = [
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1',
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=2',
    'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=3'
];
// const URL_BASE = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged='
// const makeUrlsLetlive = (letlive_urls, URL_BASE) => {
//     for (let i = 1; i <= 17; i++) {
//         letlive_urls.push(URL_BASE + i)
//     }
// }
// makeUrlsLetlive(letlive_urls,URL_BASE)
// letlive_urls.map(url => console.log(url))
var getData = function (link) {
    var driver = new selenium_webdriver_2.webdriver.Builder()
        .forBrowser('chrome')
        .build();
    return new Promise(function (resolve, reject) {
        driver.get(link);
        setTimeout(function () { return resolve(driver); }, 10000);
    });
};
var handleElem = function (elem) {
    var obj = {};
    var e1 = elem.findElement(By.css('h3 a'))
        .then(function (name) { return name.getText(); });
    var e2 = elem.findElement(By.css('.pet-details-age'))
        .then(function (age) { return age.getText(); });
    var e3 = elem.findElement(By.css('img'))
        .then(function (img) { return img.getAttribute('src'); });
    selenium_webdriver_1.promise.all([e1, e2, e3])
        .then(function (values) {
        var obj = {};
        obj.name = values[0];
        obj.age = values[1];
        obj.image = values[2];
        console.log(obj);
    });
};
var getElements = function (driver) {
    var pendingElements = driver.findElements(By.css(".pet-details"));
    pendingElements
        .then(function (elements) {
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
        elements.map(function (elem) { return handleElem(elem); });
    })
        .then(function () { return driver.quit(); });
};
var handleError = function (error) {
    console.log('HandleError: ', error);
};
// letlive_urls.map(link => {
//     getData(link)
//         .then(getElements)
//         .catch(handleError)
// })
function driverGenerator(link, getData, getElements, handleError) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('start');
                console.log('start yield');
                return [4 /*yield*/, getData(link)
                        .then(getElements)["catch"](handleError)];
            case 1:
                _a.sent();
                console.log('finish yield');
                return [2 /*return*/];
        }
    });
}
for (var _i = 0, letlive_urls_1 = letlive_urls; _i < letlive_urls_1.length; _i++) {
    var link = letlive_urls_1[_i];
    for (var _a = 0, _b = driverGenerator(link, getData, getElements, handleError); _a < _b.length; _a++) {
        var res = _b[_a];
        console.log(res);
    }
}
// ********** EXAMPLE
// function* range(start, end) {
//     let current = start
//     while (current <= end) {
//         yield current++
//     }
// }
// for (let num of range(1, 10)) {
//     console.log(num)
// } 
