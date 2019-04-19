'use strict';

var SearchCepPage = require('../pages/SearchCepPage.js');
var SearchCepResultPage = require('../pages/SearchCepResultPage.js');

describe('Cenarios de busca por CEP', function() {

    var page;
    var resultPage;
    
    beforeEach(function() {
        page = new SearchCepPage();
        page.get();
        resultPage = new SearchCepResultPage();
        resultPage.get();
    })

    it('Deve informar o endereco', function() {
        page.emptySearch();
        expect(page.mandatoryAddressMessage()).toEqual('Informe o Endere\u00E7o !');
    })

    it('Endereco invalido', function() {
        page.invalidAddress();
        expect(resultPage.errorMessage()).toEqual('DADOS NAO ENCONTRADOS');
    })

});