import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'

const webdriver = require('selenium-webdriver')
// this.driver = new webdriver.Builder()
// .forBrowser('chrome')
// .build();
// const By = webdriver.By
// const promise = webdriver.promise

export default abstract class SiteParser implements SiteParserInterface {
    public siteName: string
    readonly driver: any
    readonly By: any
    readonly promise: any

    constructor(siteName) {
        this.siteName = siteName
        // this.By = webdriver.By
        // this.driver = ""
        // this.promise = webdriver.promise
    }

    abstract fetchData(): void

    abstract getData(link: string): void

    abstract commonFuncTEST(val: string): CommonFuncTESTInterface

    toString(): void {
        console.log(`${this.siteName}`)
    }
}