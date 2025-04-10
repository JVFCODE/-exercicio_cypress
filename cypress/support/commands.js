// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('adicionarContato', (nome, telefone, email) => {
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('verificarContato', (nome, telefone, email) => {
    cy.get('.contato').should('contain', nome)
      .and('contain', telefone)
      .and('contain', email)
})
