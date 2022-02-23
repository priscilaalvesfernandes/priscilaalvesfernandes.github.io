// teste1.spec.js created with Cypress
//
// .click({force:true}), usado qdo exite hyperlink para um site externo, finalidade de fazer com que o bot ignore mensagens



context("Home", ()=>{
    beforeEach( ()=>{
        cy.wait(600)
        cy.visit("https://priscilaalvesfernandes.github.io")
    })
    var i
    for(i=0; i<10; i++){
        it('teste clique',
            () => {

                //cy.get("a#") assim chama apena o que esta dentro da tag A.
                //cy.contains()
                cy.get("#" +i).click() //adiciona o valor de i ao ID

                cy.visit("https://priscilaalvesfernandes.github.io")
        })
    }
})


