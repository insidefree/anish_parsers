import SiteParser from './SiteParser'

export default class SiteParserLetLive extends SiteParser {
    constructor(siteName) {
        super(siteName)
    }

    getData(link) {

    }

    toString() {
        console.log(`${this.siteName}`)
    }

    commonFuncTEST(val) {
        val = { name: "", age: 13 }
        return val
    }
}