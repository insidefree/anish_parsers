import SiteParser from './SiteParser'
import { SiteParserInterface, CommonFuncTESTInterface } from './interfaces'


export default class SiteParserLetLive extends SiteParser {
    constructor(siteName, pageCount) {
        super(siteName, pageCount)
    }

    start() {
        const BASE_LINK = 'http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged='
        let pageNumber = 1

        // for (let promise of this.range(1,5)) {

        // }
        this.generator(3)


    }

    *generator(count:number): IterableIterator<number> {
        while(true){
            yield count++;
            console.log(count)
        }
    }
    async *g() {
        yield 1;
        await setTimeout(function() {
            
        }, 2000);;
        yield* [2, 3];
      }  

    async f() {
        async function* g() {
            yield 1;
            await setTimeout(function() {
                
            }, 2000);;
            yield* [2, 3];
          }
        console.log('aaaaee')
        for await (const x of g()) {
           console.log(x);
        }
      }

    async fetchData() {

        // function delay(milliseconds: number, count: number): Promise<number> {
        //     return new Promise<number>(resolve => {
        //         setTimeout(() => {
        //             resolve(count);
        //         }, milliseconds);
        //     });
        // }
        // // async function always return a Promise
        // async function dramaticWelcome(): Promise<void> {
        //     console.log("Hello");

        //     for (let i = 0; i < 5; i++) {
        //         // await is converting Promise<number> into number
        //         const count: number = await delay(2000, i);
        //         console.log(count);
        //     }

        //     console.log("World!");
        // }

        // dramaticWelcome();


        // function* driverGenerator(link, getData, getElements, handleError) {
        //     console.log('start')
        //     console.log('start yield')
        //     yield getData(link)
        //         .then(getElements)
        //         .catch(handleError)

        //     console.log('finish yield')
        // }


        // for (let link of letlive_urls) {
        //     for (let res of driverGenerator(link, getData, getElements, handleError)) {
        //         console.log(res)
        //     }

        // }


        console.log('start')
        await this.getData('http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1')
            .then(this.getElements)
            .catch(this.handleError)


        console.log('end')
    }

    *range(start, end) {
        let current = start
        while (current <= end) {
            yield current++
        }
    }


    *driverGenerator(link, pageNumber) {
        let page = 1
        while (page < pageNumber) {
            console.log('start')
            console.log('start yield')
            yield this.getData(link + page)
                .then(this.getElements)
                .catch(this.handleError)

            console.log('finish yield')
            page++
        }

    }

    getData(link: string) {
        return new Promise((resolve, reject) => {
            this.driver.get(link)
            setTimeout(() => resolve(this.driver), 10000)
        })
    }

    handleElem = elem => {
        let obj = {}
        let e1 = elem.findElement(this.By.css('h3 a'))
            .then(name => { return name.getText() })
        let e2 = elem.findElement(this.By.css('.pet-details-age'))
            .then(age => { return age.getText() })
        let e3 = elem.findElement(this.By.css('img'))
            .then(img => { return img.getAttribute('src') })

        // return [e1, e2, e3]

        this.promise.all([e1, e2, e3])
            .then(values => {
                let obj: any = {}
                obj.name = values[0]
                obj.age = values[1]
                obj.image = values[2]
                console.log(obj)
            })

    }

    getElements = driver => {
        let pendingElements = driver.findElements(this.By.css(".pet-details"))
        pendingElements
            .then(elements => {
                // elements.map(elem => {
                //     let obj = {}
                //     elem.findElement(By.css('h3 a'))
                //         .then(name => name.getText()
                //             .then(name => obj.name = name)
                //         )
                //     elem.findElement(By.css('.pet-details-age'))
                //         .then(age => age.getText()
                //             .then(age => console.log(age))
                //         )
                //     elem.findElement(By.css('img'))
                //         .then(img => img.getAttribute('src')
                //             .then(img => console.log(img))
                //         )

                //     })
                let all_promises = []
                elements.map(elem => all_promises.push(this.handleElem(elem)))
                return all_promises
            })
            .then(() => driver.quit())
        console.log('quit')
    }

    handleError = (error) => {
        console.log('HandleError: ', error)
    }

    commonFuncTEST(val: string) {
        let obj = { name: "", age: 13 }
        obj.name = val
        return obj
    }
}