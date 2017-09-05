export interface CommonFuncTESTInterface {
    name: string,
    age: number
}

export interface SiteParserInterface {
    siteName: string
    getData: (link: string) => void
    toString: () => void
    commonFuncTEST: (val: string) => CommonFuncTESTInterface
}
