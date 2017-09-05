
// const webdriver = require('selenium-webdriver')
// const By = webdriver.By
// const driver = new webdriver.Builder()
//     .forBrowser('chrome')
//     .build();

// ask the browser to open a page
// driver.get('http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=1')
// setTimeout(() => {
//     let pendingElements = driver.findElements(By.css(".pet-details"))
//     pendingElements
//         .then(elements => {
//             elements.map(elem => {
//                 elem.findElement(By.css('h3 a'))
//                     .then(name => name.getText()
//                         .then(name => console.log(name))
//                     )
//                 elem.findElement(By.css('.pet-details-age'))
//                     .then(age => age.getText()
//                         .then(age => console.log(age))
//                     )
//                 elem.findElement(By.css('img'))
//                     .then(img => img.getAttribute('src')
//                         .then(img => console.log(img))
//                     )

//             })
//         })
//         .then(() => driver.quit())
// }, 10000)

function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

// async function always return a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count:number = await delay(2000, i);
        console.log(count);
    }

    console.log("World!");
}

dramaticWelcome();