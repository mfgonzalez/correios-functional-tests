'use strict';

var SearchCepPage = require('../pages/SearchCepPage.js');

describe('Cenarios de busca por CEP', function() {

    var page;
    
    beforeEach(function() {
        page = new SearchCepPage();
        page.get();
    })

    it('Deve informar o endereco', function() {
        page.emptySearch();
        expect(page.mandatoryAddressMessage()).toEqual('Informe o Endere\u00E7o !');
    })

    it('Endereco invalido', function() {
        page.invalidAddress();
        expect(page.invalidAddressMessage()).toEqual('DADOS NAO ENCONTRADOS');
    })

});