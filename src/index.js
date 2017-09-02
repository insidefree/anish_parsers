
require('chromedriver');
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var json = [];

var url = "http://www.letlive.org.il/?post_type=pet&pet-cat=pc-dog&paged=";     // basic utl of letlive dogs page

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().timeouts().implicitlyWait(70 * 1000);                          // waiting 7 seconds for avoid firewall
getPage(driver, url);                                                          // parsing function
var page = 1;

function getPage(driver, url){

    console.log('call getPage');

    driver.get(url+page);
    driver.findElements(By.css(".pet-details")).then(function(petDets){
        console.log(petDets.length);
        if(!petDets.length){
            console.log('no such page');
            return;
        } 

        getPetDetails(petDets);
        page++;
    });
}

function getPetDetails(petDets){

    petDets.forEach(function(elem){
                var dog = {};

                console.log('startForeach')
        
                elem.findElement(By.css('h3 a')).then(function(name){
                    name.getText().then(function(name){
                        dog.name = name;
                        console.log(name);

                        elem.findElement(By.css('.pet-details-age')).then(function(age){
                            age.getText().then(function(age){
                                dog.age = age;
                                console.log(age);

                                elem.findElement(By.css('img')).then(function(image){
                                    var images = [];
                                    image.getAttribute('src').then(function(imageUrl){
                                        images.push(imageUrl);
                                        dog.images = images;
                                        console.log(imageUrl);

                                        elem.findElement(By.css('.pet-execrpt p')).then(function(desc){
                                            desc.getText().then(function(desc){
                                                dog.description = desc;
                                                console.log(desc);

                                                var location = {
                                                    city: "tel-aviv (manually)",
                                                    street: "Rotshild (manually)",
                                                    position: {
                                                        lng: "lng",
                                                        lat: "lat"
                                                    }
                                                }

                                                dog.location = location;
                                                json.push(dog);

                                                console.log('endForeach');
                                            });
                                        });

                                    });
                                });

                            });
                        });

                    });
                });  

                getPage(driver, url);
     });
    }

//     var p = 1;                                                           // number of page

//     var DogCount = 0;
//     var flag = 1;

//     while(flag){

//         driver.get(url+(p++));
//         driver.findElements(By.css(".pet-details")).then(function(elem){

//             if(!elem.size()) {
//                 flag = false;
//                 return;
//             }

//             var dog = {};
//             var details = element;
        
//             elem.forEach(function(elem){
        
//                 elem.findElement(By.css('h3 a')).then(function(elem){
//                     elem.getText().then(function(name){
//                         dog.name = name;
//                         // console.log(name);
//                     });
//                 });
        
//                 elem.findElement(By.css('.pet-details-age')).then(function(elem){
//                     elem.getText().then(function(age){
//                         dog.age = age;
//                         // console.log(age);
//                     });
//                 });
        
//                 elem.findElement(By.css('img')).then(function(elem){
//                     var images = [];
//                     elem.getAttribute('src').then(function(imageUrl){
//                         images.push(imageUrl);
//                         // console.log(imageUrl);
//                     });
//                     dog.images = images;
//                 });
        
//                 elem.findElement(By.css('.pet-execrpt p')).then(function(elem){
//                     elem.getText().then(function(descr){
//                         dog.description = descr;
//                         // console.log(descr);
//                     });
//                 });
        
//                 var location = {
//                     city: "tel-aviv (manually)",
//                     street: "Rotshild (manually)",
//                     position: {
//                         lng: "lng",
//                         lat: "lat"
//                     }
//                 }
        
//                 dog.location = location;
//                 json.push(dog);
        
//             });
//         });
//     }   
//     console.log("we have "+DogCount+" dogs");     


driver.quit();