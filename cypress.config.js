const { defineConfig } = require("cypress");



module.exports = defineConfig({

  env: {
    produto_url: '/product/helena-hooded-fleece/', //cy.visit(Cypress.env('produto_url'))
    Mock_url: '/?wc-ajax=get_refreshed_fragments', //cy.visit(Cypress.env('Mock_url'))
    carrinho_url: '/carrinho/',
    remove_url: '/carrinho/?removed_item=1',
  },


  e2e: {

    // baseUrl: 'http://localhost',
    baseUrl: 'http://lojaebac.ebaconline.art.br',

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },

  },
});
