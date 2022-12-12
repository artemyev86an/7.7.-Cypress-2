//const { describe } = require("mocha");
describe.only("UI test", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru");
  });

  it("Should page nav length", () => {
    cy.get(".page-nav").should("have.length", 1);
  });
  it("Should page header", () => {
    cy.get(".page-header__title").should("have.text", "Идёмвкино");
  });
  it("Should hall 1 ", () => {
    cy.get(":nth-child(1) > :nth-child(2) > .movie-seances__hall-title").should(
      "have.text",
      "Зал 1"
    );
    cy.get(
      ":nth-child(1) > :nth-child(2) > .movie-seances__list > .movie-seances__time-block > .movie-seances__time"
    ).click();
    cy.get(".buying__info-hall").should("have.text", "Зал 1");
    cy.get(".acceptin-button")
      .should("be.disabled")
      .and("have.text", "Забронировать");
  });
});
