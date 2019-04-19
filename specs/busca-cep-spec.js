'use strict';
var SearchCepPage = require('../pages/BuscaCepEnderecoPage');

describe('Cearios de busca por CEP', function() {

    var page;
    
    beforeEach(function() {
        page = new SearchCepPage();
        page.get();
    })

    it('Deve informar o endereco', function() {
        page.emptySearch();
        expect(page.mandatoryAddressMessage()).toEqual('Informe o Endere\u00E7o !');
    });

})