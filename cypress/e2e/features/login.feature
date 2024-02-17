Feature: Logon SauceDemo

@login
Scenario: Login with credentials
Given user is on SauceDemo page
When user logged in with "standard_user" and "secret_sauce"
Then user should login successfully