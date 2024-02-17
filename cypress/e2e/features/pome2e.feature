Feature: SauceDemo e2e 

Scenario: Logon to checkout scenario

Given user is on SauceDemo page
When user logged in with "standard_user" and "secret_sauce"
And user add sauce lab backpack to the cart
And the user checks out the product
When the user submits the personal information
And user confirms the product
Then the user sees the conformation message
   