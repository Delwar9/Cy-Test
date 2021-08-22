/// <reference types = "cypress"/>

const token ='****'

describe('abc', ()=>{

    // before hook is used for repetitive test, that will open up your page before all of your tests
    before(()=>{
        cy.then(()=>{
            window.localStorage.setItem('__auth__token',token)
        })
    })


    //write the viewport & website once and run for every single test
    //bootstrapping external things
    //brforeEach runs before starting the execution of each of the tests specified using “it” or “specify” in the “describe” or “context” block.
    beforeEach(()=>{
        cy.viewport(1280,720)
        cy.visit('https://codedamn.com/')
        
    })
    
   // it('The webpage loads at least',()=>{
       
        
        //mocha -> .should('exist')
       // cy.contains('New way to learn programming.').should('exist')
        
       // cy.get('asyncComponents > div >a')
        
       // cy.get('div#root').should('exist') 
        
        // best practice below
        //cy.get('[data-testid=main-title]').should('exist')
        //first text part just want to check whclearether the texts are in webpage
        // last should part from website we going to test
       // cy.contains('Become Full Stack Web ').should('have.text',
       // 'Become Full Stack Web Developer') 

        //cy.get('div#app').should('not.exist') 

        
   // })
    it('Login page looks good',() =>{
        // cy.viewport(1280,720)
        // cy.visit('https://codedamn.com/')
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

    it('The log in page work', ()=>{
        // cy.viewport(1280,720)
        // cy.visit('https://codedamn.com/')
        cy.contains('Sign In').click()
        cy.contains('Forgot your password?').click()

        cy.url().should('include', '/password-reset')
        cy.go('back')

    })
    
    it('Login work',()=> {
        // cy.viewport(1280,720)
        // cy.visit('https://codedamn.com/')

        cy.contains('Sign in').click({force: true})
      
        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[id=email]').type('admin', {force: true})
        cy.get('[id=password]').type('admin')
        cy.get('[data-testid="login"]').click()
        
        cy.contains('Unable to authorize').should('not.exist')


    })

})
