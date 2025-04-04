describe('Testes da Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve incluir um novo contato', () => {
    cy.get('input[name="name"]').type('João Silva');
    cy.get('input[name="email"]').type('joao.silva@example.com');
    cy.get('input[name="phone"]').type('11987654321');
    cy.get('button[type="submit"]').click();
    cy.contains('João Silva').should('exist');
  });

  it('Deve alterar um contato existente', () => {
    cy.contains('João Silva').parents('tr').find('button.edit').click();
    cy.get('input[name="name"]').clear().type('João Silva Alterado');
    cy.get('button[type="submit"]').click();
    cy.contains('João Silva Alterado').should('exist');
  });

  it('Deve remover um contato', () => {
    cy.contains('João Silva Alterado').parents('tr').find('button.delete').click();
    cy.contains('João Silva Alterado').should('not.exist');
  });
});
