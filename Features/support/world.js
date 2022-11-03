var {defineSupportCode, } = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver')
var firefox = require('selenium-webdriver/firefox')
var {chrome, Options} = require('selenium-webdriver/chrome')

function CustomWorld(){
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome').build();
}

defineSupportCode(function ({setDefaultTimeout, setWorldConstructor}) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(60*2000);
})