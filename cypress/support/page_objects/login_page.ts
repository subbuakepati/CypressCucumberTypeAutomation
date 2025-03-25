/// <reference types="cypress" />
import base_page from "./base_page";

class login_page extends base_page {
    navigateTo_Login_Page() {
        super.navigate("/Login-Portal/index.html");
    }

    type_Username(username) {
        cy.get('#text').type(username);
    }

    type_Password(password) {
        cy.get('#password').type(password);
    }

    clickOn_Login_Button() {
        cy.get('#login-button').click();
    }
}
export default login_page;