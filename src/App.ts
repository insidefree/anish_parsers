import { SiteParserLetlive } from './Parser'



let sp: SiteParserLetlive = new SiteParserLetlive('bench', 18)


sp.toString()
//sp.getData('http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1')

sp.fetchData()