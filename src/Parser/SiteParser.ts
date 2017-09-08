import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'

const webdriver = require('selenium-webdriver')
// const By = webdriver.By
// const promise = webdriver.promise


export default abstract class SiteParser implements SiteParserInterface {
    public siteName: string
    public pageCount: number
    public BASE_URL: string
    readonly driver: any
    readonly By: any
    readonly promise: any

    constructor(siteName) {
        this.siteName = siteName
        this.By = webdriver.By
        this.driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
        this.promise = webdriver.promise
    }

    abstract fetchData(pageCount: number):  AsyncIterableIterator<any>

    abstract getData(link: string): void

    abstract commonFuncTEST(val: string): CommonFuncTESTInterface

    toString(): void {
        console.log(`${this.siteName}`)
    }
}