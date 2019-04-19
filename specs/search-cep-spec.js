'use strict';

var SearchCepPage = require('../pages/SearchCepPage.js');

describe('Cenarios de busca por Localidade | Logradouro', function() {

    var page;
    
    beforeEach(function() {
        page = new SearchCepPage();
        page.get();
    })

    // it('Deve informar UF', function() {
    //     page.emptySearch();
    //     expect(page.mandatoryUFMessage()).toEqual('Selecione a UF !');
    // })

    it('Deve informar cidade, municipio, distrito ou povoado', function() {
        page.onlyUf();
        expect(page.mandatoryCityDistrictMessage()).toEqual('Informe o nome da cidade, munic\u00EDpio, distrito ou povoado !');
    })

}); 