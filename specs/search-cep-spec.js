'use strict';

var SearchCepPage = require('../pages/SearchCepPage.js');

describe('Cenarios de busca por Localidade | Logradouro', function() {

    var page;
    
    beforeEach(function() {
        page = new SearchCepPage();
        page.get();
    })

    it('Deve informar UF', function() {
        page.emptySearch();
        expect(page.mandatoryUFMessage()).toEqual('Selecione a UF !');
        page.restartBrowser();
    });

    it('Deve informar cidade, municipio, distrito ou povoado', function() {
        page.onlyUf();
        expect(page.mandatoryCityDistrictMessage()).toEqual('Informe o nome da cidade, munic\u00EDpio, distrito ou povoado !');
        page.restartBrowser();
    });

    it('Deve informar o logradouro', function() {
        page.ufCity();
        expect(page.mandatoryAddress()).toEqual('Informe o logradouro !');
        page.restartBrowser();
    });
    
    it('Pesquisar usando logradrou completo', function(){
        page.searchByAddressComplete();
        expect(element(by.className('ctrlcontent')).getText()).toContain('1 a 1 de 1');
    });
}); 