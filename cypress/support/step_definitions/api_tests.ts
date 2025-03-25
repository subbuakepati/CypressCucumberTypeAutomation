/// <reference types="cypress" />
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('I send a POST request to {string} with the following data', (url, dataTable) => {
  const data = dataTable.rowsHash();
  cy.request('POST', `https://reqres.in${url}`, data).then((response) => {
    cy.wrap(response).as('apiResponse');
  });
});

Given('I send a PUT request to {string} with the following data', (url, dataTable) => {
  const data = dataTable.rowsHash();
  cy.request('PUT', `https://reqres.in${url}`, data).then((response) => {
    cy.wrap(response).as('apiResponse');
  });
});

Then('the response status should be {int}', (status) => {
  cy.get('@apiResponse').its('status').should('eq', status);
});

Then('the response body should include the following', (dataTable) => {
  const data = dataTable.rowsHash();
  cy.get('@apiResponse').its('body').should('include', data);
});