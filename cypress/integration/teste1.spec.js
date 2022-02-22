// teste1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Home', () => {

    it('visita site', () => {
        cy.wait(600)
        cy.visit('https://priscilaalvesfernandes.github.io')//visitando um site
    })

    it('teste clique',
        () => {

            //Testantando botões
            cy.get('#1').click()
            cy.get('#2').click()
            cy.get("#3").click()
            cy.get("#4").click()
            cy.get("#5").click()
            cy.get("#6").click()

    })
})

describe('Visita pagina generica', () => {

    it('visita site', () => {
        cy.wait(600)
        cy.visit('https://priscilaalvesfernandes.github.io/generic.html')//visitando um site
    })

    it('teste clique',
        () => {
            cy.get("#7").click()
            cy.get("#8").click()
            // cy.get("#9").click()
            //cy.get("#10").click()

        })
})
