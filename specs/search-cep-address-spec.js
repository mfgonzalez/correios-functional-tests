'use strict';

var SearchCepAddressPage = require('../pages/SearchCepAddressPage.js');
var SearchCepAddressResultPage = require('../pages/SearchCepAddressResultPage.js');
var SearchCepPage = require('../pages/SearchCepPage.js');

describe('Cenarios de busca por CEP', function() {

    var page;
    var searchCepPage;
    var resultPage;
    
    beforeEach(function() {
        searchCepPage = new SearchCepPage();
        page = new SearchCepAddressPage();
        page.get();
        resultPage = new SearchCepAddressResultPage();
        resultPage.get();
    });

    it('Deve informar o endereco', function() {
        page.emptySearch();
        expect(page.mandatoryAddressMessage()).toEqual('Informe o Endere\u00E7o !');
        searchCepPage.restartBrowser();
    });

    it('Endereco invalido', function() {
        page.invalidAddress();
        expect(element(by.className('ctrlcontent')).getText()).toContain('DADOS NAO ENCONTRADOS');    
    });

    it('Endereco valido com opcao todos', function(){
        page.validAddressWithOptionAll();
        expect(element(by.className('ctrlcontent')).getText()).toContain('1 a 3 de 3');
    });
    
    it('Endereco valido e opção "Unidade Operacional', function(){
        page.validAddressWithOptionOperationUnit();
        expect(element(by.className('ctrlcontent')).getText()).toContain('1 a 1 de 1');
    });

    it('Endereço por CEP valido', function(){
        page.validCepWithOptionOperationAll();
        expect(element(by.className('ctrlcontent')).getText()).toContain('1 a 1 de 1');
    });
});