/// <reference types="Cypress" />

describe("First test", () => {
  it("Check the title", () => {
    cy.visit("https://www.amazon.in/");
    cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
  });

  it("-ve test to check title", () => {
    cy.visit("https://www.amazon.in/");
    cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches');
  })

  it("Insert the value in searchbar", () => {
    cy.visit("https://www.amazon.in/");
    cy.get("#twotabsearchtextbox").type("test").should('have.value', "test");
  })

  it("Insert the value in searchbar from keyPress", () => {
    cy.visit("https://www.amazon.in/");
    cy.get('#twotabsearchtextbox').type('{shift}a').should("have.value", "a");
    
  });
});