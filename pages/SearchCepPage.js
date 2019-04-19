'use strict';

var SearchCepPage = function() {

    var searchButton = element(by.css('input[type="submit"]'));

    this.get = function() {
        browser.waitForAngularEnabled(flase);
        browser.get('http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm');
    }
    
    this.emptySearch = function() {
        searchButton.click();
    }

    this.mandatoryAddressMessage = function() {
        var ptor = protractor.getInstance();
        var alertDialog = ptor.switchTo().alert();
        return alertDialog.getText();
    }

}
module.exports = SearchCepPage;