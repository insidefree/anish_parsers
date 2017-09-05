interface SiteParserInterface {
    siteName: string
}

export default class SiteParser {
    constructor(private siteName: string) {

    }

    public toString(): void {
        console.log(`${this.siteName}`)
    }
}