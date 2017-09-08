export interface CommonFuncTESTInterface {
    name: string,
    age: number
}

export interface SiteParserInterface {
    siteName: string
    readonly BASE_URL: string
    readonly driver: any
    readonly By: any
    readonly promise: any
    fetchData: (pageCount: number) => AsyncIterableIterator<any>
    getData: (link: string) => void
    toString: () => void
    commonFuncTEST: (val: string) => CommonFuncTESTInterface
}
