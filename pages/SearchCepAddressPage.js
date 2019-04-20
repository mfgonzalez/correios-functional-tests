'use strict';

var SearchCepAddressPage = function() {

    var searchButton = element(by.css('input[type="submit"]'));

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
        element(by.name('relaxation')).sendKeys("xxxxx");
        searchButton.click();
    }

    this.validAddressWithOptionAll = function() {
        element(by.name('relaxation')).sendKeys("Avenida Saturnino de Brito, Porto Alegre");
        searchButton.click();
    }

    this.validAddressWithOptionOperationUnit = function() {
        element(by.name('relaxation')).sendKeys("Avenida Saturnino de Brito, Porto Alegre");

        element.all(by.tagName('option')).then(function(options){
          options[4].click();
        });
        searchButton.click();
    }

    this.validCepWithOptionOperationAll = function() {
        element(by.name('relaxation')).sendKeys("91320000");
        searchButton.click();
    }
}
module.exports = SearchCepAddressPage;