// teste_linear.js created with Cypress
//
// .click({force:true}), usado qdo exite hyperlink para um site externo, finalidade de fazer com que o bot ignore mensagens



describe("Teste Linear", ()=>
{
    beforeEach( ()=>
    {
        cy.wait(100)
        cy.visit("https://priscilaalvesfernandes.github.io")

    })
 let i;
 let j;

    for(i=0; i<=5; i++)
    {
        it("Teste aleatório", () =>
        {
            cy.get("#"+ Math.ceil(Math.random() * (10 - 1) + 1)).click({ force: true })//criar e chamar um número aleatório
            j == cy.get

            //if(j==11 || j ==12){
               // cy.visit("https://priscilaalvesfernandes.github.io/trabalho.html")
          //  }
            if(j>5 && j<=10){
                cy.visit("https://priscilaalvesfernandes.github.io/informacoes.html")}
        })
    }
})

/*describe("Teste Linear", ()=> {
    beforeEach(() => {
        cy.wait(100)
        cy.visit("https://priscilaalvesfernandes.github.io/informacoes.html")

    })
    for(let i = 6; i<=10; i++){
        cy.get("#"+ Math.ceil(Math.random() * (10 - 1) + 1)).click({ force: true })//criar e chamar um número aleatório
    }

})*/
