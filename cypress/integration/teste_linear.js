// teste_linear.js created with Cypress
//
// .click({force:true}), usado qdo exite hyperlink para um site externo, finalidade de fazer com que o bot ignore mensagens



describe("Teste Linear", ()=>
{
    beforeEach( ()=>
    {
        cy.wait(100)//definindo o tempo de espera em uma página
        cy.visit("https://priscilaalvesfernandes.github.io")//visitando a página inicial do site
    })

    for(let i=1; i<=12; i++)
    {
        it('teste clique', () =>
        {
           if(i>5 && i<11){
               cy.visit("https://priscilaalvesfernandes.github.io/informacoes.html")//visitando a página sendo que esteja
                                                                                    // na página A e precise visitar um id na página B
           }

           if (i==11 || i==12){
               cy.visit("https://priscilaalvesfernandes.github.io/trabalho.html")//visitando a página sendo que esteja
                                                                                // na página A e precise visitar um id na página B
           }
           cy.get("#" +i).click() //adiciona o valor de i ao ID
            //cy.get("a#") assim chama apena o que esta dentro da tag A. cy.contains()
        })
    }
})


