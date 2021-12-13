/// <reference types="cypress" />

describe("tic tac toe game", () => {
  it("Is redirected when new player enters the game", () => {
    cy.visit("/");
    cy.get("[data-cy=figure-btn-x]").click();
    cy.contains("Play").click();
    cy.get("[data-cy=spinner]").should("be.visible");

    cy.window().its("socketIo").invoke("emit", "enter_waiting_room", "test");

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/play");
    });

    cy.get("button").first().click();
    cy.get("[data-cy=1-1-x]").should("be.visible");

    cy.window().then((win) => {
      const gamingRoomId = localStorage.getItem("gamingRoomId");

      win.socketIo.emit("add_turn_to_gaming_room", `${gamingRoomId}@1+2+test`);
    });
    cy.wait(1000);
    cy.get("[data-cy=1-2-o]").should("be.visible");
  });
});
