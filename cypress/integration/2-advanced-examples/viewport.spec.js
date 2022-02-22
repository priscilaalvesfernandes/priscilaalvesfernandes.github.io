/// <reference types="cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/viewport')
  })

  it('cy.viewport() - set the viewport size and dimension', () => {
    // https://on.cypress.io/viewport

    cy.get('#navbar').should('be.visible')
    cy.viewport(320, 480)

    // a barra de navegação deve ter entrado em colapso, pois nossa tela é menor
    cy.get('#navbar').should('not.be.visible')
    cy.get('.navbar-toggle').should('be.visible').click()
    cy.get('.nav').find('a').should('be.visible')

    // vamos ver como é nosso aplicativo em uma tela super grande

    cy.viewport(2999, 2999)

    // cy.viewport() aceita um conjunto de tamanhos predefinidos
    //      // para definir facilmente a tela para a largura e altura de um dispositivo
    //
    //      // Adicionamos um cy.wait() entre cada alteração da janela de visualização para que você possa ver
    //      // a mudança, caso contrário, é um pouco rápido demais para ver :)

    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6')
    cy.wait(200)
    cy.viewport('iphone-5')
    cy.wait(200)
    cy.viewport('iphone-4')
    cy.wait(200)
    cy.viewport('iphone-3')
    cy.wait(200)

    // cy.viewport() aceita uma orientação para todas as predefinições
    // a orientação padrão é 'retrato'

    cy.viewport('ipad-2', 'portrait')
    cy.wait(200)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(200)

    // A janela de visualização será redefinida para as dimensões padrão
    // entre os testes (o padrão pode ser definido em cypress.json)
  })
})
