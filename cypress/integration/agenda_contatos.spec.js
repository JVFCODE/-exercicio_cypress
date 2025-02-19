/// <reference types="cypress" />

describe('Agenda de Contatos - Testes', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('João Silva');
        cy.get('input[placeholder="E-mail"]').type('joao@email.com');
        cy.get('input[placeholder="Telefone"]').type('11999999999');
        cy.contains('button', 'Adicionar').click();
        
        cy.contains('td', 'João Silva').should('exist');
    });

    it('Deve editar um contato existente', () => {
        cy.contains('td', 'João Silva').parent().within(() => {
            cy.contains('button', 'Editar').click();
        });
        
        cy.get('input[placeholder="Nome"]').clear().type('João Souza');
        cy.contains('button', 'Salvar').click();
        
        cy.contains('td', 'João Souza').should('exist');
    });

    it('Deve remover um contato', () => {
        cy.contains('td', 'João Souza').parent().within(() => {
            cy.contains('button', 'Remover').click();
        });
        
        cy.contains('td', 'João Souza').should('not.exist');
    });
});
