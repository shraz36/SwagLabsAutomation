class CheckoutPage {

    get txtFirstName() { return cy.get('[data-test="firstName"]') }

    get txtLastName() { return cy.get('[data-test="lastName"]') }

    get txtZipCode() { return cy.get('[data-test="postalCode"]') } 

    get btnContinue() { return cy.get('[data-test="continue"]')}

    enterDetails() {
        this.txtFirstName.type('shraz')
        this.txtLastName.type('pani')
        this.txtZipCode.type('SE4')
    }

    continueCheckout(){
        this.btnContinue.click()
    }

}

export default new CheckoutPage()