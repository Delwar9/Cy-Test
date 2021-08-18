/// <reference types = "cypress"/>

describe('abc', ()=>{
    it('The webpage loads at least',()=>{
       
        cy.visit('https://codedamn.com/')
        //mocha -> .should('exist')
       // cy.contains('New way to learn programming.').should('exist')
        
       // cy.get('asyncComponents > div >a')
        
       // cy.get('div#root').should('exist') 
        
        // best practice below
        //cy.get('[data-testid=main-title]').should('exist')
        //first text part just want to check whether the texts are in webpage
        // last should part from website we going to test
       // cy.contains('Become Full Stack Web ').should('have.text',
       // 'Become Full Stack Web Developer') 

        //cy.get('div#app').should('not.exist') 

        
    })
    it('Login page looks good',() =>{
        cy.viewport(1280,720)
        cy.visit('https://codedamn.com/')
        cy.contains('Sign up with').should('exist')
        cy.contains('Sign up with Google').should('exist')
        cy.contains('Sign up with Facebook').should('exist')
        cy.contains('Or continue with').should('exist')
        cy.contains('Username').should('exist')
        cy.get('[id=username]').click()
        cy.contains('Email').should('exist')
        cy.get('[id=email]').click()
        cy.contains('Password').should('exist')
        cy.get('[id=password]').click()
        cy.contains('Create Account').should('exist')


    })

    it.only('The log in page work', ()=>{
        cy.viewport(1280,720)
        cy.visit('https://codedamn.com/')
        cy.contains('Sign In').click()
        cy.contains('Forgot your password?').click()

        cy.url().should('include', '/password-reset')
        cy.go('back')

    })
    
    it('Login work',()=> {
        cy.viewport(1280,720)
        cy.visit('https://codedamn.com/')

        cy.contains('Sign in').click({force: true})
      
        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[id=email]').type('admin', {force: true})
        cy.get('[id=password]').type('admin')
        cy.get('[data-testid="login"]').click()
        
        cy.contains('Unable to authorize').should('not.exist')


    })

})
