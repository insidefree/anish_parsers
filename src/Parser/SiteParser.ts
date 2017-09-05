import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'


export default abstract class SiteParser implements SiteParserInterface {
    public siteName: string
    constructor(siteName: string) {
        this.siteName = siteName
    }

    abstract getData(link: string): void

    abstract toString(): void

    abstract commonFuncTEST(val): CommonFuncTESTInterface
}