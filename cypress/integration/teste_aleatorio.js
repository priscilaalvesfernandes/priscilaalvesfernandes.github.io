
describe("Teste aleatório", ()=>
{
    beforeEach( ()=>
    {
        cy.wait(100)
        cy.visit("https://priscilaalvesfernandes.github.io")

    })
    for (let j=0; j<=12; j++) {
        let i = Math.ceil(Math.random() * (12 - 1) + 1);//aleatorizando númetos de 1-12
        it("Teste aleatório", () => {
            if (i > 0 && i < 6) {
                cy.visit("https://priscilaalvesfernandes.github.io")
                cy.get("#" + i).click({force: true})//clica no botão que possui o id de acordo com o número sorteado
            }
            if (i > 5 && i < 11) {
                cy.visit("https://priscilaalvesfernandes.github.io/informacoes.html")
                cy.get("#" + i).click({force: true})//clica no botão que possui o id de acordo com o número sorteado
            }
            if (i == 11 || i == 12) {
                cy.visit("https://priscilaalvesfernandes.github.io/trabalho.html")
                cy.get("#" + i).click({force: true})//clica no botão que possui o id de acordo com o número sorteado
            }
        })
    }
})
// .click({force:true}), usado qdo exite hyperlink para um site externo, finalidade de fazer com que o bot ignore mensagens

