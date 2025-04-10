describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Substitua pelo endereço da sua aplicação
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[type="text"]').type('Novo Contato');
    cy.get('input[type="email"]').type('novo@contato.com');
    cy.get('input[type="tel"]').type('11999999999');
    cy.get('button[type="submit"]').click();

    cy.get('.contato').should('have.length', 4);
    cy.contains('Novo Contato').should('exist');
  });

  it('Deve editar um contato existente', () => {
    cy.get('.edit').first().click();
    cy.get('input[type="text"]').first().clear().type('Contato Editado');
    cy.get('button[type="submit"]').click();

    cy.contains('Contato Editado').should('exist');
  });

  it('Deve remover um contato existente', () => {
    cy.get('.delete').first().click();
    cy.get('.contato').should('have.length', 2);
  });
});
