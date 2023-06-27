/// <reference types = "cypress" />

const { homePage, productSearchPage } = require('../support/pages')

describe('Intercept Exercicio', () => {

    beforeEach(() => {

    });

    it(' add produto Intercept SPY', () => {
        cy.visit('/product/helena-hooded-fleece/')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Gray').click()

        cy.intercept({
            path: '/?wc-ajax=get_refreshed_fragments'
        }).as('mudarInfos')

        cy.get('.single_add_to_cart_button').click()
        cy.wait('@mudarInfos').then(intercept => {
            expect(intercept.response.body.cart_hash).equal("e2874a01d01b7feb533ef2539b904797")
        })


    });

    it('add produto - Mock API response', () => {
        cy.visit('/product/helena-hooded-fleece/')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Gray').click()

        cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments', { cart_hash: "cavalo" }).as('mudarInfos')

        cy.get('.single_add_to_cart_button').click()
        cy.wait('@mudarInfos').then(intercept => {
            expect(intercept.response.body.cart_hash).equal("cavalo")
        })

    });

    it('add produto - Data Driven Mock API response', () => {
        cy.visit('/product/helena-hooded-fleece/')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Gray').click()

        cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments', { fixture: 'InterceptFixture.json' }).as('mudarInfos')

        cy.get('.single_add_to_cart_button').click()
        cy.wait('@mudarInfos').then(intercept => {
            expect(intercept.response.body.cart_hash).equal("cavalo")
        })

    });

    it.only('', () => {
        cy.AddProduto()
        
    });

});