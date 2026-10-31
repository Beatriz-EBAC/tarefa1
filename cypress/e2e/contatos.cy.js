
describe('Testes da Agenda de Contatos', () => {
  const identificador = Date.now();

  const email = 'teste@email.com';
  const telefone = '11987654321';

  beforeEach(() => {
    cy.visit('/');
  });

  function preencherContato(nome) {
    cy.get('input').eq(0).clear().type(nome);
    cy.get('input').eq(1).clear().type(email);
    cy.get('input').eq(2).clear().type(telefone);
  }

  function localizarContato(nome) {
    return cy.contains('.contato li', nome)
      .closest('.contato');
  }

  it('Deve adicionar um contato', () => {
    const nome = `Maria Inclusao ${identificador}`;

    preencherContato(nome);
    cy.get('button.adicionar').click();

    localizarContato(nome).should('be.visible');
  });

  it('Deve editar um contato', () => {
    const nome = `Maria Edicao ${identificador}`;
    const nomeAlterado = `Maria Oliveira ${identificador}`;

    preencherContato(nome);
    cy.get('button.adicionar').click();

    localizarContato(nome)
      .find('button.edit')
      .click();

    cy.get('input').eq(0)
      .clear()
      .type(nomeAlterado);

    cy.get('button.alterar').click();

    localizarContato(nomeAlterado).should('be.visible');
    cy.contains('.contato li', nome).should('not.exist');
  });

  it('Deve excluir um contato', () => {
    const nome = `Maria Exclusao ${identificador}`;

    preencherContato(nome);
    cy.get('button.adicionar').click();

    localizarContato(nome)
      .find('button.delete')
      .click();

    cy.contains('.contato li', nome).should('not.exist');
  });
});
