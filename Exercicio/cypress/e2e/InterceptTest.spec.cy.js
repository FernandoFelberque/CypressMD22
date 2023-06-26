/// <reference types = "cypress" />

const { homePage, productSearchPage } = require('../support/pages')

describe('Intercept Exercicio', () => {

    beforeEach(() => {
        cy.visit("/")
    });

    it('Adicionar Produto', () => {

        cy.intercept({
            method: 'GET',
            url: 'wp-admin/admin-ajax*',
            query: {
                term: 'Smartphone'
            }
        }), req => {
            req.reply({
                statusCode: 200,
                // Nao esta mudando o Nome do produto para EBAC PHONE
                body: `${req.query.callback}(
                 ${JSON.stringify(
                    [{"label":"EBAC PHONE","link":"http:\/\/lojaebac.ebaconline.art.br\/product\/smartphone-teste\/","result":"1 result found with <span> \"Sma\" <\/span> ","view_all":false,"image":"http:\/\/lojaebac.ebaconline.art.br\/wp-content\/uploads\/2023\/02\/24-3-160x130.jpg","price":" <del aria-hidden=\"true\"> <span class=\"woocommerce-Price-amount amount\"> <bdi> <span class=\"woocommerce-Price-currencySymbol\"> &#82;&#36; <\/span> 50,00 <\/bdi> <\/span> <\/del> <ins> <span class=\"woocommerce-Price-amount amount\"> <bdi> <span class=\"woocommerce-Price-currencySymbol\"> &#82;&#36; <\/span> 20,00 <\/bdi> <\/span> <\/ins>"}]
                 )}            
                 )`
            })
        }

        homePage.searchMagnifier()
        productSearchPage.search('Smartphone')
        productSearchPage.productList.first().should('have.attr', 'title', 'Smartphone teste')
        cy.get('#ui-id-1 > :nth-child(1)').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '1')

    });

});