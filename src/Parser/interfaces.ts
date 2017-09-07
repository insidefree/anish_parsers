export interface CommonFuncTESTInterface {
    name: string,
    age: number
}

export interface SiteParserInterface {
    siteName: string
    readonly driver: any
    readonly By: any
    readonly promise: any
    fetchData: () => void
    getData: (link: string) => void
    toString: () => void
    commonFuncTEST: (val: string) => CommonFuncTESTInterface
}
