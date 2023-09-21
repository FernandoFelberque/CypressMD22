/// <reference types = "cypress" />

const {paginaPedido} = require('../support/pages')
const data = require('../fixtures/data.json')

describe('Fazer CheckOut', () => {

    beforeEach(() => {

        cy.Login(data.email, data.senha)
        cy.AddProduto()

    });

    it('Checkout', () => {

        cy.CheckOut()
        paginaPedido.pedido.should("be.visible")

    });





});