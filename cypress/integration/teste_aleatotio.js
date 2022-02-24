// teste_aleatotio.js created with Cypress

describe("Home", ()=>
{
    beforeEach( ()=>
    {
        cy.wait(100)
        cy.visit("https://priscilaalvesfernandes.github.io")

    })
    cy.get('#button')
    cy.should('have.length.gt',3).then(($button)=> {
        const button = $li.toArray()
        return Cypress ._.sample(button)
        })
    cy.then(($li)=>{
        expect(Cypress.dom.isJquery($li), 'jQuery element').to.be.true
        cy.log('achou"${$li.text()}`"')
    })
    cy.click
    cy.get('#button .clicked').should('have.length',1)
})