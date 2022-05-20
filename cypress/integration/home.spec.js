

describe('home page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440, 900)
        //comando utilizado para setar a resolução 
        cy.visit('https://buger-eats.vercel.app')
        //comando utilizado para acessar a página desejada
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        //comando utilizado para realizar uma verificação de texto
    })
})