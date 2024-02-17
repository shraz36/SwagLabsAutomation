import headerComp from "../components/header.comp"

class ProductsPage {

    get lnkSauceLabBackpack() { return cy.contains('Sauce Labs Backpack')}
    get lnkTShirtRed() { return cy.get('#item_3_title_link > .inventory_item_name')}

    get btnLabsBackpackAddCart() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')}

    get btnLabsBackpackRemove() {return cy.get('[#remove-sauce-labs-backpack]')}

    selectBackPack() {
        this.lnkSauceLabBackpack.click()
    }

    selectTShirtRed(){
        this.lnkTShirtRed.click()
    }

    addProducsToCart(){
        this.btnLabsBackpackAddCart.click()
    }

    removeProductsFromCart(){
        this.btnLabsBackpackRemove.click()
    }


}

export default new ProductsPage()