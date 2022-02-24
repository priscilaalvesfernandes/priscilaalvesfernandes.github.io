// teste_linear.js created with Cypress
//
// .click({force:true}), usado qdo exite hyperlink para um site externo, finalidade de fazer com que o bot ignore mensagens



describe("Home", ()=>
{
    beforeEach( ()=>
    {
        cy.wait(400)
        cy.visit("https://priscilaalvesfernandes.github.io")

    })


    for(let i=1; i<=10; i++)
    {
        it('teste clique', () =>
        {

            if(i>=6 && i<=10){
                cy.visit("https://priscilaalvesfernandes.github.io/informacoes.html")
            }
            cy.get("#" +i).click() //adiciona o valor de i ao ID
            cy.wait(400)


            //cy.get("a#") assim chama apena o que esta dentro da tag A. cy.contains()

        })
     }
})


