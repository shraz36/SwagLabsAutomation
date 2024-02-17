import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../pom/pages/login.page';

Given("user is on SauceDemo page", function () {
   loginPage.openURL()
    });

When("user logged in with {string} and {string}", (username, password) => {
    loginPage.login(username,password)
})