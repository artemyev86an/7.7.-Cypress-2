//const { describe } = require("mocha");

describe("Test Cinema Happy", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin/index.php");
    cy.login("qamid@qamid.ru", "qamid");
  });
  it("Displaying the master page", () => {
    cy.get("#hall-control > .conf-step__header > .conf-step__title").should(
      "be.visible"
    );
  });
  it("Happy login", () => {
    cy.get("#hall-control > .conf-step__header > .conf-step__title").should(
      "be.visible"
    );
  });
});
describe("Test Cinema Sad", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin/index.php");
  });
  it("Sad login", () => {
    cy.login("qamid@qamid.ru");
    cy.get('[for="pwd"] > .login__input')
      .then(($el) => $el[0].checkValidity()) //cy.log($el)
      .should("be.false");
  });
  it("Sad email", () => {
    cy.login("", "12wa");
    cy.get('[for="email"] > .login__input')
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  it("Sad email and login", () => {
    cy.login("coco@gmail.com", "pass");
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
describe.only("UI test", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru");
  });

  it("Choosing a seat", () => {
    cy.get(
      ":nth-child(1) > :nth-child(3) > .movie-seances__list > .movie-seances__time-block > .movie-seances__time"
    ).click();

    const seats = require("../fixtures/seats/normal.json");
    seats.forEach((item) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${item.row}) > :nth-child(${item.seat})`
      ).click();
      cy.get(".acceptin-button").should("be.visible").should("not.be.disabled");
    });
  });
  it("We check the reserved place", () => {
    cy.get(
      ":nth-child(1) > :nth-child(3) > .movie-seances__list > .movie-seances__time-block > .movie-seances__time"
    ).click();

    cy.get(".acceptin-button")
      .should("be.disabled")
      .and("have.text", "Забронировать");
  });
  it("Hall 4 Booking Test", () => {
    cy.get(
      ":nth-child(1) > :nth-child(3) > .movie-seances__list > .movie-seances__time-block > .movie-seances__time"
    ).click();

    const seats = require("../fixtures/seats/normal.json");
    seats.forEach((item) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${item.row}) > :nth-child(${item.seat})`
      ).click();
    });

    cy.get(".acceptin-button").click();

    cy.get(":nth-child(2) > .ticket__details").should("be.visible");
    cy.get(".acceptin-button").should("be.visible").and("not.be.disabled");
    cy.get(":nth-child(6) > .ticket__details").should("have.text", "100");
  });
});
