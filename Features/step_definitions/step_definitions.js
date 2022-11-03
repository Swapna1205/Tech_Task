
var {defineSupportCode, } = require('cucumber');
var {By, until, WebElement, Key} = require('selenium-webdriver')
const {elementLocated} = require("selenium-webdriver/lib/until");
var {actions, Actions} = require("selenium-webdriver/lib/input");

defineSupportCode (function ({Given,When,Then})
{
Given('open ESW website', function (callback) {
    console.log("Started Step : open ESW website");
    this.driver.get("https://esw.com/");
    this.driver.sleep(1000);
    console.log("Successfully launched ESW website: https://esw.com/")
    console.log("Ended Step : open ESW website");
    callback();
});

When('on Careers section find all Software positions in Dublin', function (callback)
{
    //Retrieve WebElement 'company' to perform mouse hover
    console.log("Started Step : on Careers section find all Software positions in Dublin");

    //Click on Allow all Cookies
    let AllowallCookies = this.driver.findElement(By.xpath("//*[@id=\"CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll\"]"));
    AllowallCookies.click();
    this.driver.sleep(2000);
    console.log("Successfully Click on Allow all Cookies button")

    //Click on menuOption 'company'
    let CompanyOption = this.driver.findElement(By.xpath("//li[@id=\"menu-item-31513\"]"));
    CompanyOption.click();
    this.driver.sleep(1000);
    console.log("Successfully Click on menuOption 'company'")

    //Click on menuOption 'Careers'
    let CareersOption =  this.driver.findElement(By.xpath("//li[@id='menu-item-32114']/a"));
    this.driver.executeScript("arguments[0].click();", CareersOption);
    this.driver.sleep(2000);
    console.log("Successfully selected on menuOption 'CareersOption'")

    //Click on ViewOpenPosition
    // let ViewOpenPosition =  this.driver.findElement(By.xpath("//*[@id=\"post-31885\"]/div/div[1]/section[1]/div/div[1]/div/span[2]/a[contains(text(),'View open positions')]"));
    // this.driver.executeScript("arguments[0].scrollIntoView(true);", ViewOpenPosition);
    // this.driver.executeScript("arguments[0].click();", ViewOpenPosition);
    //
    // let SelectLocation =  this.driver.findElement(By.id("*[@id="locselect"]/option[2]"));
    // let SelectLocation =  this.driver.findElement(By.id("locselect"));
    // SelectLocation.click();

    //Select Dublin as Location
    //let SelectDublin =  this.driver.findElement(By.xpath("*[@id=\"locselect\"]/option[2]"));
    // SelectDublin.click();

    console.log("Ended Step : on Careers section find all Software positions in Dublin");
    callback();
});

Then('open any position to see details', function (callback) {

    //Click on SelectReadMore
    //let SelectReadMore =  this.driver.findElement(By.xpath("*[@id="post-32014"]/div/div/div[2]/div/div[1]/div/p[2]/a"));
    //SelectReadMore.click();

    //check the Position Details
    //let PositionDetails = this.driver.findElement(By.xpath("*[@id=\"content\"]/p[1]/strong")).getText();
    //console.log("check the Position Details of Software positions in Dublin as " + PositionDetails);

    callback();
});

})
