//const { describe } = require("mocha");

describe("Test Cinema ", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru");
  });
  it("Seat reservation", () => {
    cy.get(
      ":nth-child(1) > :nth-child(2) > .movie-seances__list > .movie-seances__time-block > .movie-seances__time"
    ).click();
    const seats = require("../../fixtures/seats/normal.json");
    seats.forEach((item) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${item.row}) > :nth-child(${item.seat})`
      ).click();
      cy.get(".acceptin-button").should("be.visible").should("not.be.disabled");
    });
    cy.get(".acceptin-button").click();
    cy.get(".ticket__check-title").should("have.text", "Вы выбрали билеты:");
  });
});
