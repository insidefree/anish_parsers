import SiteParser from './SiteParser'
import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'

export default class SiteParserLetLive extends SiteParser {
    constructor(siteName) {
        super(siteName)
    }

    getData(link: string) {

    }

    toString() {
        console.log(`${this.siteName}`)
    }

    commonFuncTEST(val: string) {
        let obj = { name: "", age: 13 }
        obj.name = val
        return obj
    }
}