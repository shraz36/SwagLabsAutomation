class HeaderComponent{

    get iconCart() { return cy.get('.shopping_cart_link')}
    get menuBurger() { return cy.get('#react-burger-menu-btn')}

    selectCart(){
        this.iconCart.click()
    }
  
    selectMenu(){
        this.menuBurger.click()
    }


}
export default new HeaderComponent()