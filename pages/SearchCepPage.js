'use strict';

var SearchCepPage = function() {

    var searchButton = element(by.css('input[type="submit"]'));

    function fillByName(name) {
        element(by.name(name)).sendKeys(xxxxxxx);
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

    }

}
module.exports = SearchCepPage;