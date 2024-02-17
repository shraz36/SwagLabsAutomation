class LoginPage{

    get textUsername() { return cy.get('#user-name')}
    get textPassword() { return cy.get('#password')}
    get btnLogin() { return cy.get('[data-test="login-button"]')}

    openURL(){
        cy.visit('/')
    }

    login(username, password){
        this.textUsername.type(username)
        this.textPassword.type(password)
        this.btnLogin.click()
        cy.screenshot()
    }
}

export default new LoginPage()