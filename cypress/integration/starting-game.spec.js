/// <reference types="cypress" />

describe("tic tac toe game", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  after(() => {
    cy.clearLocalStorage();
  });

  it("can select figure", () => {
    cy.get("[data-cy=figure-btn-x]")
      .click()
      .should(() => {
        expect(localStorage.getItem("userFigure")).to.eq("x");
      });

    cy.get("[data-cy=figure-btn-o]")
      .click()
      .should(() => {
        expect(localStorage.getItem("userFigure")).to.eq("o");
      });
  });

  it("requires authentication and sets to local storage", () => {
    cy.intercept("POST", "**/authenticate").as("authentication");
    cy.wait("@authentication").should(({ response }) => {
      expect(localStorage.getItem("userId")).to.eq(response.body);
    });

    cy.reload(true);

    cy.wait("@authentication").should(({ response, request }) => {
      expect(request.body).to.deep.eq({
        playerId: localStorage.getItem("userId"),
      });
      expect(localStorage.getItem("userId")).to.eq(response.body);
    });
  });

  it("Awaits for player when clicked in the 'play' button", () => {
    cy.contains("Play").click();
    cy.get("[data-cy=spinner]").should("be.visible");
  });
});
