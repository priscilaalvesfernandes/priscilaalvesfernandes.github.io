// teste1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Meu primeira visita', () => {
    it('visita site', () => {
        cy.wait(600)
        cy.visit('https://priscilaalvesfernandes.github.io')//visitando um site
    })
})

describe('Meu primeiro teste', () => {
    it('teste clique', () => {

     //Testantando botões
        cy.get(1).click()
        cy.get(2).click()
        //cy.get("#3").click()
        //cy.get("#4").click()
       // cy.get("#5").click()
       // cy.get("#9").click()
       // cy.get("#10").click()
        //cy.get("#6").click()
        //cy.get("#7").click()
        //cy.get("#8").click()


    })
})

/*describe('Repetições', () =>{
    it ('loop',()=>{

        var j
        for (var j = 1; j <=9 ; j++) {
            cy.get(j).click()
        }

    })
})*/