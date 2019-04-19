'use strict';

var SearchCepResultPage = function() {

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.buscacep.correios.com.br/sistemas/buscacep/resultadoBuscaCepEndereco.cfm');
    }

    this.errorMessage = function() {
        return $('ctrlcontent').getText();
    }

}
module.exports = SearchCepResultPage;