'use strict';

var SearchCepPage = function() {

    var searchButton = element(by.css('input[type="submit"]'));

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www2.correios.com.br/sistemas/rastreamento/');
    };
    
    this.emptySearch = function() {
        searchButton.click();
    };

    this.invalidTrackingCode = function() {
        element(by.name('objetos')).sendKeys("AA100833276BR");
        searchButton.click();
    };

    this.validTrackingCode = function() {
        element(by.name('objetos')).sendKeys("RS245086917DE");
        searchButton.click();
    };
}
module.exports = SearchCepPage;