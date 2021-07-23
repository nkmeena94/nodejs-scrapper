const request = require('request');
const fs = require('fs');
// const cheerio = require('cheerio');

console.log(`Running  Application\n`)

const URL = "https://bigfuture.collegeboard.org/college-university-search/swarthmore-college";

const browserObject = require('./browser');
const scraperController = require('./pageController');


// //Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();
const collegeList = require('./collegeList');

async function read() {
    from = 0;
    //total = 3690;
    total = 30;
    while (from < total) {
        const clgData = await collegeList(from, (response) => {
            if (response.data.length > 0) {
                // call to another function
                console.log("data feched")
                response.data.forEach((key, value) => {
                    var college = {};
                    college.orgId = key.orgId;
                    college.name = key.name;
                    college.city = key.city;
                    college.state = key.state;
                    college.stateName = key.stateName;
                    college.country = key.country;
                    college.countryName = key.countryName;
                    //console.log(college);
                    //Pass the browser instance to the scraper controller
                    scraperController(browserInstance, college, (htmlResponse) => {
                        console.log("Response fetched with HTML DOM");
                        //console.log(htmlResponse);
                    });
                });

            }
        }, () => {

        });
        from = from + 15;

    }

    // var college = {};
    // college.name = "Brown University";
    // college.orgId = "0";
    // scraperController(browserInstance, college, (htmlResponse) => {
    //     console.log("Response");
    //     console.log(htmlResponse);
    // });
}
read();


// Pass the browser instance to the scraper controller
//scraperController(browserInstance)