describe('Teste de funcionalidades - Agenda de Contatos', () => {
  const baseUrl = 'https://agenda-contatos-react.vercel.app';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('João Silva');
    cy.get('input[placeholder="E-mail"]').type('joao.silva@example.com');
    cy.get('input[placeholder="Telefone"]').type('11999999999');
    cy.contains('button', 'Adicionar').click();
    cy.contains('João Silva').should('exist');
  });

  it('Deve editar um contato existente', () => {
    cy.contains('João Silva')
      .parent()
      .contains('Editar')
      .click();
    cy.get('input[placeholder="Nome"]').clear().type('João Pedro');
    cy.contains('button', 'Salvar').click();
    cy.contains('João Pedro').should('exist');
  });

  it('Deve remover um contato existente', () => {
    cy.contains('João Pedro')
      .parent()
      .contains('Remover')
      .click();
    cy.contains('João Pedro').should('not.exist');
  });
});
