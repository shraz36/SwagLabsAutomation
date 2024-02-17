class ReviewPage{
 
    get btnFinish() { return cy.get('[data-test="finish"]')}

    get btnCancel() { return cy.get('[data-test="cancel"]') }

    finish() {
        this.btnFinish.click()
    }
}

export default new ReviewPage()