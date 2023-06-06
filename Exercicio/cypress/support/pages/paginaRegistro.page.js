/// <reference types = "cypress" />

class paginaRegistro{
    get #email(){ return cy.get("#reg_email")}
    get #senha(){ return cy.get("#reg_password")}
    get #registrar(){ return cy.get(':nth-child(4) > .button')}

    Registro (email , senha){
        this.#email.type(email)
        this.#senha.type(senha)
        this.#registrar.click()
    }
}

module.exports = new paginaRegistro()