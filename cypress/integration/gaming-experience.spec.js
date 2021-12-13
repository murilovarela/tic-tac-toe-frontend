/// <reference types="cypress" />

describe("tic tac toe game", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  after(() => {
    cy.clearLocalStorage();
  });

  it("Is redirected when new player enters the game", () => {
    cy.contains("Play").click();
    cy.get("[data-cy=spinner]").should("be.visible");

    cy.window().its("socketIo").invoke("emit", "enter_waiting_room", "test");

    cy.location.should(() => {
      expect(loc.pathname).to.eq("/app/index.html");
    });
  });
});
