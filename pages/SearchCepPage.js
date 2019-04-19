'use strict';

var SearchCepPage = function() {

    var searchButton = element(by.css('input[type="submit"]'));

    function fillByName(name, text) {
        element(by.name(name)).sendKeys(text);
    }

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm');
    }
    
    this.emptySearch = function() {
        searchButton.click();
    }

    this.mandatoryAddressMessage = function() {
        return browser.driver.switchTo().alert().getText();
    }

    this.invalidAddress = function() {
        fillByName('relaxation', 'xxxxx');
        searchButton.click();
    }

}
module.exports = SearchCepPage;