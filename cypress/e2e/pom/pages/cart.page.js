class CartPage{

    get btnContinueShopping() {return cy.get('[data-test="continue-shopping"]')}

    get btnCheckout() { return cy.get('[data-test="checkout"]')}

    get btnRemove() {cy.get('[data-test="remove-sauce-labs-backpack"]')}

    checkout(){
        this.btnCheckout.click()
    }
    
}
export default new CartPage()