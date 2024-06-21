# SwagLabsAutomation
Automation using POM and BDD framework

## Built with
- NodeJS
- Javascript
- Cypress

## Covers the following test scenarios
  - End to End flow from log-in to cart checkout
  - Assertions, Hooks(Test set up and tear down method)
  - Error-Handling

## Automation implementation covers the following
- Uses the Page Object Model to automate test runs in two browsers (chrome, electron)
- Uses Mochawesome Reporter plugin to generate reports

## Usage
To run automation in UI mode
```bash
npm run cypress:open
```
To run automation in CLI mode

Runs automation on chrome browser
```
npm run cypress:chrome:headed
```
Runs automation on electron browser
```
npm run cypress:electron:headed
```
