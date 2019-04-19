'use strict';

var BuscaCepEnderecoPage = function() {

    var searchButton = element(by.css('input[type="submit"]'));


    this.get = function() {
        browser.waitForAngularEnabled(flase);
        browser.get('http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm');
    }
    
    this.emptySearch = function() {
        searchButton.click();
    }

}