var assert = require('assert'),     
    fs = require('fs'),     
    test = require('selenium-webdriver/testing'),     
    webdriver = require('selenium-webdriver');

describe('My Website', function(){
	this.timeout(15000);
	var driver;
	before(function(){
		driver = new webdriver.Builder()
					.forBrowser('chrome')
					.build();
					driver;
	});
	it('Contact form should return success', function(){
		driver.get('http://google.com.ar');
	});
	after(function(){
		driver.quit;
	});
});
