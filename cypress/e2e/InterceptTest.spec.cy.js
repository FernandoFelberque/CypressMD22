/// <reference types = "cypress" />

describe('Intercept Exercicio', () => {

    beforeEach(() => {

    });
// 3 add produtos pois estava praticando
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

        cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments', { cart_hash: "test" }).as('mudarInfos')

        cy.get('.single_add_to_cart_button').click()
        cy.wait('@mudarInfos').then(intercept => {
            expect(intercept.response.body.cart_hash).equal("test")
        })

    });

    it('add produto - Data Driven Mock API response', () => {
        cy.visit('/product/helena-hooded-fleece/')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Gray').click()

        cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments', { fixture: 'InterceptFixture.json' }).as('mudarInfos')

        cy.get('.single_add_to_cart_button').click()
        cy.wait('@mudarInfos').then(intercept => {
            expect(intercept.response.body.cart_hash).equal("teste codigo do carrinho")
        })

    });

    // exercicio do MD23
    it.only('Add Produto exercicio MD23', () => {
        cy.visit(Cypress.env('produto_url'))// testar com local host e base url
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Gray').click()

        cy.intercept('POST', Cypress.env('Mock_url'), { cart_hash: "teste codigo do carrinho" }).as('mudarInfos')

        cy.get('.single_add_to_cart_button').click()
        cy.wait('@mudarInfos').then(intercept => {
            expect(intercept.response.body.cart_hash).equal("teste codigo do carrinho")
        })

    });

    it.only('Remover produto exercicio MD23', () => {
        cy.AddProduto()

        cy.visit(Cypress.env('carrinho_url'))

        cy.intercept('GET', Cypress.env('remove_url'), { removed_item: "removido" }).as('mudarInfos')

        cy.get('.remove > .fa').click()
        cy.wait('@mudarInfos').then(intercept => {
            expect(intercept.response.body.removed_item).equal("removido")
        })

    });

    it.only('Update carrinho exercicio MD23', () => {
        cy.AddProduto()
        cy.visit(Cypress.env('carrinho_url'))

        cy.intercept('POST', Cypress.env('carrinho_url'), { fixture: 'updateFixture.json' }).as('mudarInfos')

        cy.get('.plus').click()
        cy.wait('@mudarInfos').then(intercept => {
            expect(intercept.response.body.update_cart).equal("Update Cart")
            
        })

    });

});