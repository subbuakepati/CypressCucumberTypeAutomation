/// <reference types="cypress" />

class base_page {
    
    navigate(path) {
        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseUrl + path)
        })
    }

    getPageTitle() {
        return cy.title();
    }
}
export default base_page;