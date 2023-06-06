/// <reference types = "cypress" />

export const paginaPainel = {
    get painelTab() {return cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a')}
}