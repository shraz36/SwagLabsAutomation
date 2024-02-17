import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import productsPage from '../../pom/pages/products.page'
import inventoryPage from '../../pom/pages/inventory.page'
import cartPage from '../../pom/pages/cart.page'
import checkoutPage from '../../pom/pages/checkout.page'
import reviewPage from '../../pom/pages/review.page'
import completePage from '../../pom/pages/complete.page'

When("user add sauce lab backpack to the cart", () => {
    productsPage.selectBackPack()
    inventoryPage.addToCart()
    inventoryPage.btnBackToProd.should('be.visible')
})

When("the user checks out the product", () => {
    inventoryPage.chooseCart()
    cartPage.checkout()
})

When("the user submits the personal information", () => {
    checkoutPage.enterDetails()
   
})

When("user confirms the product", () => {
    checkoutPage.continueCheckout()
    reviewPage.finish()
})

When("the user sees the conformation message", () => {
    completePage.lblConfirmMessage.should('contain', 'Thank you for your order!')
})