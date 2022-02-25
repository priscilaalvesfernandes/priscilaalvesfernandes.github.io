// teste_linear.js created with Cypress
//
// .click({force:true}), usado qdo exite hyperlink para um site externo, finalidade de fazer com que o bot ignore mensagens



describe("Home", ()=>
{
    beforeEach( ()=>
    {
        cy.wait(100)
        cy.visit("https://priscilaalvesfernandes.github.io")

    })


    for(let i=1; i<=12; i++)
    {
        match.random()*3

        it('teste clique', () =>
        {
            if(i>0 && i<3){
                cy.visit("https://priscilaalvesfernandes.github.io/informacoes.html")

            }

            /*if (i==11 || i==12){
                cy.visit("https://priscilaalvesfernandes.github.io/trabalho.html")

            }*/
            cy.get("#" +i).click() //adiciona o valor de i ao ID



            //cy.get("a#") assim chama apena o que esta dentro da tag A. cy.contains()

        })


    }
})


