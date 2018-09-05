const assert = require('assert');
const { Before, Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer');


let browser
let page

Given('I am on the Google search page',{timeout: 5*1000}, async function(){

    browser = await puppeteer.launch({
        args: ['--no-sandbox']
    });
    page = await browser.newPage();
    await page.goto("http://www.google.com");
});

When('I search for {string}',{timeout: 5*1000}, async function(searchKey){
    let searchInput = await page.$('input[name=q]')
    await searchInput.type(searchKey);
    await page.keyboard.press( 'Enter' );  
});

Then('close browser', async function(){
    await browser.close();
});
