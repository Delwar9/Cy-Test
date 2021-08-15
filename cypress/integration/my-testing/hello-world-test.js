/// <reference types = "cypress"/>

describe('abc', ()=>{
    it('test one',()=>{
        cy.visit('https://codedamn.com/')
        //mocha -> .should('exist')
        cy.contains('Explore Learning Paths').should('exist')
        
       // cy.get('asyncComponents > div >a')
        
        cy.get('div#root').should('exist') 
        
        // best practice below
        cy.get('[data-testid=main-title]').should('exist')
        //first text part just want to check whether the texts are in webpage
        // last should part from website we going to test
        cy.contains('Become Full Stack Web ').should('have.text',
        'Become Full Stack Web Developer') 

    })
})
