"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncIterator) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};
exports.__esModule = true;
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var promise = webdriver.promise;
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
// console.log(driver)
var BASE_URL = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=';
require("core-js/shim");
require("core-js/modules/es7.symbol.async-iterator");
function foo(pageCount) {
    return __asyncGenerator(this, arguments, function foo_1() {
        var page, temp, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    page = 1;
                    _c.label = 1;
                case 1:
                    if (!(page < pageCount)) return [3 /*break*/, 4];
                    console.log("start get " + page);
                    driver.get(BASE_URL + page);
                    console.log('start getData');
                    _b = (_a = getData()).then;
                    return [4 /*yield*/, __await(getElements)];
                case 2: return [4 /*yield*/, __await.apply(void 0, [_b.apply(_a, [_c.sent()])])];
                case 3:
                    temp = _c.sent();
                    console.log("Temp: " + temp);
                    console.log('end getData');
                    console.log('page++');
                    page++;
                    return [3 /*break*/, 1];
                case 4:
                    driver.quit();
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, item, result, e_1_1, e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 7, 8, 13]);
                    _a = __asyncValues(foo(3));
                    _d.label = 1;
                case 1: return [4 /*yield*/, _a.next()];
                case 2:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    return [4 /*yield*/, _b.value];
                case 3:
                    item = _d.sent();
                    return [4 /*yield*/, item
                        // result.get()
                        // console.log(result)
                    ];
                case 4:
                    result = _d.sent();
                    _d.label = 5;
                case 5: return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_b && !_b.done && (_c = _a["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _c.call(_a)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    });
}
var getData = function () {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(driver); }, 10000);
    });
};
function getElTest() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (res) {
                    setTimeout(function () { return res('getElTest'); }, 2000);
                })];
        });
    });
}
function getElements() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    console.log('getElements **');
                    var pendingElements = driver.findElements(By.css(".pet-details"));
                    pendingElements
                        .then(function (elements) {
                        elements.map(function (elem) {
                            var obj = {};
                            elem.findElement(By.css('h3 a'))
                                .then(function (name) { return name.getText()
                                .then(function (name) { return console.log(name); }); });
                            elem.findElement(By.css('.pet-details-age'))
                                .then(function (age) { return age.getText()
                                .then(function (age) { return console.log(age); }); });
                            elem.findElement(By.css('img'))
                                .then(function (img) { return img.getAttribute('src')
                                .then(function (img) { return console.log(img); }); });
                        });
                        // let all_promises = []
                        // elements.map(elem => all_promises.push(this.handleElem(elem)))
                        // return all_promises
                    })
                        .then(function () { return resolve(); });
                    console.log('quit');
                })];
        });
    });
}
main();
