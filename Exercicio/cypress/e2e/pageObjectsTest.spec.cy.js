/// <reference types = "cypress" />

//const paginaRegistro = require('../support/pages/paginaRegistro.page');
//const {paginaPainel} = require('../support/pages/paginaPainel.page')
const {paginaPainel, paginaRegistro} = require('../support/pages')
const data = require('../fixtures/data.json')

describe('Criar conta', () => {
    
    beforeEach(() => {
        cy.visit('/minha-conta/')
    });
    
    it('Registrar usuario valido', () => {
        paginaRegistro.Registro(data.email, data.senha)
        paginaPainel.painelTab.should("be.visible")
    });
});