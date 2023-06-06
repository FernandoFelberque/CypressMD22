/// <reference types = "cypress" />

const {paginaPainel, paginaRegistro} = require('../support/pages')
const data = require('../fixtures/data.json')

describe('CheckIn e CheckOut', () => {
    
    beforeEach(() => {
        
        cy.CheckIn(data.email, data.senha)    
    });
    
    it('Login usuario valido', () => {
        paginaPainel.painelTab.should("be.visible")
    });

afterEach(() => {
    cy.CheckOut() 
});

});