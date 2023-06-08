
Cypress.Commands.add('AddProduto', () => {

    cy.visit('/product/helena-hooded-fleece/')
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Gray').click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('CheckOut', () => {

    
    cy.visit('/checkout/')
    // informacoes como nome, telefone, endereco etc.. ja estao setados na conta
    cy.get('#terms').click()
    cy.get('#place_order').click()

    // Tentando usar appActions
    //cy.request({
    //    url: '/checkout/order-received/',
    //    method: 'GET',
   // })

})

Cypress.Commands.add('Login', (user, pass) => {

    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', "3f6556c747") // esse numero muda por dia?
    fd.append('_wp_http_referer', "/minha-conta/")
    fd.append('login', "Login")

    cy.request({
        url: '/minha-conta/',
        method: 'POST',
        body: fd

        // Codigo funciona sem a parte dos cookies. Com os Cookies esta dando problema no forEach
    })//.then(resp => {
    //resp.headers['set-cookie'].forEach(cookie => {
    //const primeiro = cookie.split(';')[0]
    // const divisor = primeiro.indexOf('=')
    //const chave = primeiro.substring(0, divisor)
    //const valor = primeiro.substring(divisor + 1)
    //cy.setCookie(chave, valor)
    // });
    //})
    cy.visit('/minha-conta/')
})