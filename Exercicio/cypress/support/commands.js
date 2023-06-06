
Cypress.Commands.add('CheckOut', () => {

    const QSP = new FormData()
    //QSP.append('action', "logout")
    //QSP.append('redirect_to', "minha-conta")
    // QSP.append('_wpnonce', "3b08e4b464")

    cy.request({
        url: 'wp-login.php?',
        method: 'GET',
        body: {
           
        }

    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const primeiro = cookie.split(';')[0]
            const divisor = primeiro.indexOf('=')
            const chave = primeiro.substring(0, divisor)
            const valor = primeiro.substring(divisor + 1)
            cy.setCookie(chave, valor)
        });
    })
    cy.visit('/minha-conta/')
})

Cypress.Commands.add('CheckIn', (user, pass) => {

    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', "e07eab9145")
    fd.append('_wp_http_referer', "/minha-conta/")
    fd.append('login', "Login")

    cy.request({
        url: '/minha-conta/',
        method: 'POST',
        body: fd

    })//.then(resp => {
    //resp.headers['Set-Cookie'].forEach(cookie => {
    //const primeiro = cookie.split(';')[0]
    //const divisor = primeiro.indexOf('=')
    //const chave = primeiro.substring(0, divisor)
    //const valor = primeiro.substring(divisor + 1)
    //cy.setCookie(chave, valor)
    //});
    //})
    cy.visit('/minha-conta/')
})