export class LoginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'
    loginPage_loginRedirectPath = '/login.html'
    loginPage_successMessage = 'Login Successful :)'
    loginpage_backHome = 'h4 > a'
    loginPage_homePath = "/index.html"

    enterUsername(username: string){
        cy.get(this.loginPage_username)
            .type(username)
    }
    enterPassword(password: string){
        cy.get(this.loginPage_password)
            .type(password)
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton)
            .click()
        cy.location('pathname').should('equal', this.loginPage_loginRedirectPath)
        cy.contains(this.loginPage_successMessage)
    }
    homeRedirect(){
        cy.get(this.loginpage_backHome)
            .click()
        cy.location("pathname").should("equal", this.loginPage_homePath)
    }
}