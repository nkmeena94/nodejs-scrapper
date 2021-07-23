const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance , collegeObj , success){
    let browser;
    try{
        browser = await browserInstance;
        await pageScraper.scraper(browser , collegeObj , success);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance , collegeObj , success) => scrapeAll(browserInstance , collegeObj , success)