'use strict';

var SearchCepAddressPage = require('../pages/SearchCepAddressPage.js');
// var SearchCepAddressResultPage = require('../pages/SearchCepAddressResultPage.js');

describe('Cenarios de busca por CEP', function() {

    var page;
    // var resultPage;
    
    beforeEach(function() {
        page = new SearchCepAddressPage();
        page.get();
        // resultPage = new SearchCepAddressResultPage();
        // resultPage.get();
    })

    // it('Deve informar o endereco', function() {
    //     page.emptySearch();
    //     expect(page.mandatoryAddressMessage()).toEqual('Informe o Endere\u00E7o !');
    // })

    // it('Endereco invalido', function() {
    //     page.invalidAddress();
    //     expect(resultPage.errorMessage()).toEqual('DADOS NAO ENCONTRADOS');
    // })

});