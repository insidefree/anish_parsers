import { SiteParserLetlive } from './Parser'



let sp: SiteParserLetlive = new SiteParserLetlive('bench')


// sp.start()

// sp.fetchData()
// let test = sp.getData('http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1')

// console.log(test)

sp.fetchData()