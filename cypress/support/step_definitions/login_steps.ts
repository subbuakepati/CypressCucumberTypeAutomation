/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import login_page from "../page_objects/login_page";

const loginPage = new login_page;
let stub;

Given('I navigate to the webdriveruniversity login page', () => {
    loginPage.navigateTo_Login_Page();
})

When(`I type a username {}`, (username) => {
    loginPage.type_Username(username);
})

When(`I type a password {}`, (password) => {
    loginPage.type_Password(password);
})

When(`I click on the login button`, () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    loginPage.clickOn_Login_Button();
})

Then('I should be presented with an alert box which contains text {string}', (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})

