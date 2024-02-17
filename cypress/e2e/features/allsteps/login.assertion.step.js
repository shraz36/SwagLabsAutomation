import {Then} from '@badeball/cypress-cucumber-preprocessor'

Then("user should login successfully", function() {
    cy.get('#item_4_title_link > .inventory_item_name').should('be.visible')
})