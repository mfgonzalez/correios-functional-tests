'use strict';

var SearchCepPage = function() {

    var searchButton = element(by.css('input[type="submit"]'));

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCep.cfm');
    }
    
    this.emptySearch = function() {
        searchButton.click();
    }

    this.mandatoryUFMessage = function() {
        return browser.driver.switchTo().alert().getText();
    }

    this.onlyUf = function() {
        element(by.cssContainingText('option', 'RS')).click();
        searchButton.click();
    }

    this.mandatoryCityDistrictMessage = function() {
        return browser.driver.switchTo().alert().getText();
    }

}
module.exports = SearchCepPage;