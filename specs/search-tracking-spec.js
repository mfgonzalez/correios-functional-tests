'use strict';

var SearchTrackingPage = require('../pages/SearchTrackingPage.js');

describe('Cenarios de Rastreamento de pacotes', function() {

    var page;
    
    beforeEach(function() {
        page = new SearchTrackingPage();
        page.get();
    })

    it('Deve informar Codigo de Rastreio', function() {
        page.emptySearch();
        expect(element(by.id('infoMensagem')).getText())
            .toEqual('Por favor, digite de um a 50 códigos de objetos, ou um CPF/CNPJ válido');
    });

    it('Deve informar codigo de rastreio invalido', function() {
        page.invalidTrackingCode();
        expect(element(by.className('info error')).getText())
            .toEqual('O nosso sistema não possui dados sobre o objeto informado.');
    });

    it('Deve informar codigo de rastreio valido', function() {
        page.validTrackingCode();
        expect(element(by.className('highlightSRO')).getText())
            .toContain('Objeto entregue ao destinatário');
    });
}); 