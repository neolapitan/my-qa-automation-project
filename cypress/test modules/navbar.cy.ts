export class Navbar {
    navbar_homeClass = '.navbar'
    navbar_homeBtnLoc = '[href="index.html"]'
    navbar_homePageRedirect = '/index.html'
    navbar_contactBtnLoc = '[href="contact.html"]'
    navbar_contactPageRedirect = '/contact.html' 

    clickHomeButton(){
        cy.get(this.navbar_homeClass)
            .find(this.navbar_homeBtnLoc)
            .click()
        cy.location('pathname').should('equal', this.navbar_homePageRedirect)
    }
    clickContactButton(){
        cy.get(this.navbar_homeClass)
            .find(this.navbar_contactBtnLoc)
            .click()
        cy.location('pathname').should('equal', this.navbar_contactPageRedirect)

    }
}