import headerComp from "./header.comp";

class SideBarComp{

get lnkAllItem() { return cy.get('#inventory_sidebar_link')}

get lnkAbout() { return cy.get('#inventory_sidebar_link')}

get lnklogout() { return cy.get('#logout_sidebar_link')}

get lnkResetAppState() { return cy.get('#reset_sidebar_link')}

logout() {
    headerComp.selectMenu()
    this.lnklogout.click()
}
}
export default new SideBarComp