/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress começa com uma lousa em branco para cada teste
    // então devemos dizer a ele para visitar nosso site com o comando `cy.visit()`.
    // Como queremos visitar a mesma URL no início de todos os nossos testes,
    // nós o incluímos em nossa função beforeEach para que ele seja executado antes de cada teste
    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default', () => {
    // Usamos o comando `cy.get()` para obter todos os elementos que correspondem ao seletor.
    // Então, usamos `should` para afirmar que existem dois itens correspondentes,
    // que são os dois itens padrão..
    cy.get('.todo-list li').should('have.length', 2)

    // Podemos ir ainda mais longe e verificar se cada padrão todos contém
    // o texto correto. Usamos as funções `first` e `last`
    // para obter apenas o primeiro e o último elementos correspondentes individualmente,
    // e então execute uma asserção com `should`.

    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('can add new todo items', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'Feed the cat'

    // Vamos pegar o elemento input e usar o comando `type` para
    // insira nosso novo item de lista. Depois de digitar o conteúdo do nosso item,
    // precisamos digitar a tecla enter também para enviar a entrada.
    // Esta entrada tem um atributo data-test, então vamos usá-lo para selecionar o
    // elemento de acordo com as melhores práticas:
    // https://on.cypress.io/selecting-elements

    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

    // Agora que digitamos nosso novo item, vamos verificar se ele realmente foi adicionado à lista.
    // Como é o item mais novo, deve existir como o último elemento da lista.
    // Além disso, com os dois itens padrão, devemos ter um total de 3 elementos na lista.
    // Como as declarações geram o elemento que foi declarado,
    // podemos encadear ambas as asserções em uma única instrução.

    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {

    // Além de usar o comando `get` para obter um elemento pelo seletor,
    // também podemos usar o comando `contains` para obter um elemento pelo seu conteúdo.
    // No entanto, isso produzirá o <label>, que é o elemento de nível mais baixo que contém o texto.
    // Para verificar o item, encontraremos o elemento <input> para este <label>
    // percorrendo o dom até o elemento pai. A partir daí, podemos 'encontrar'
    // o elemento <input> da caixa de seleção filho e use o comando `check` para verificá-lo

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    // Agora que verificamos o botão, podemos ir em frente e ter certeza
    // que o elemento da lista agora está marcado como concluído.
    // Novamente vamos usar `contains` para encontrar o elemento <label> e então usar o comando `parents`
    // para percorrer vários níveis no dom até encontrarmos o elemento <li> correspondente.
    // Assim que obtivermos esse elemento, podemos afirmar que ele possui a classe concluída.

    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    beforeEach(() => {

      // Pegaremos o comando que usamos acima para marcar um elemento
      // Como queremos realizar vários testes que começam com a verificação
      // um elemento, nós o colocamos no gancho beforeEach
      // para que seja executado no início de cada teste.

      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {

      // Clicaremos no botão "active" para exibe apenas itens incompletos

      cy.contains('Active').click()

      // Após a filtragem, podemos afirmar que existe apenas um item incompleto na lista.

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')

      // Para uma boa medida, vamos também afirmar que a tarefa que marcamos não existe na página.

      cy.contains('Pay electric bill').should('not.exist')
    })

    it('can filter for completed tasks', () => {

      // Podemos executar etapas semelhantes ao teste acima para garantir que apenas as tarefas concluídas sejam mostradas

      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {

      // Primeiro, vamos clicar no botão "Clear completed"
      // `contains` está realmente servindo a dois propósitos aqui.
      // Primeiro, é garantir que o botão exista dentro do dom.
      // Este botão só aparece quando pelo menos uma tarefa está marcada
      // então este comando está verificando implicitamente que ele existe.
      // Segundo, ele seleciona o botão para que possamos clicar nele.

      cy.contains('Clear completed').click()

      // Então podemos ter certeza de que há apenas um elemento
      // na lista e nosso elemento não existe

      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')

      // Por fim, certifique-se de que o botão limpar não exista mais.

      cy.contains('Clear completed').should('not.exist')
    })
  })
})
