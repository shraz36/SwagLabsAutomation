import headerComponent from '../components/header.comp.js'

class InventoryPage {

  get btnAddToCart() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]') }

  get btnRemove() { return cy.get('[data-test="remove-sauce-labs-backpack"]') }

  get btnBackToProd() { return cy.get('[data-test="back-to-products"]') }

  addToCart() {
  this.btnAddToCart.click()
  }

  chooseCart() {
    headerComponent.selectCart()
  }

  chooseBackToProd() {
    this.btnBackToProd.click()
  }

  
}
export default new InventoryPage()