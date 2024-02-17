class CompleteCheckoutPage{

    get btnBackHome(){ return cy.get('[data-test="back-to-products"]')}

    get lblConfirmMessage() { return cy.get('.complete-header')}

    
}

export default new CompleteCheckoutPage