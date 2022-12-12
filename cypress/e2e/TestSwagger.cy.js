describe("Swagger", () => {
  it("Create", () => {
    cy.createUser({
      id: "50550550555",
      username: "Plushcake",
      firstName: "Cake",
      lastName: "cupcake ninja",
      email: "string",
      password: "string",
      phone: "string",
      userStatus: 1,
    }).then(({ body, status }) => {
      cy.log(JSON.stringify(body));
      cy.log(status);
      expect(status).to.eq(200);
    });
  });

  it("Put", () => {
    cy.createUser({
      id: "50550550555",
      username: "Plushcake",
      firstName: "Cake",
      lastName: "cupcake ninja",
      email: "string",
      password: "1234",
      phone: "string",
      userStatus: 1,
    });
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/Plushcake",
      body: {
        id: "50550550555",
        username: "Plushcake",
        firstName: "Cake",
        lastName: "Eclair",
        email: "tortiki@namnam",
        password: "554433",
        phone: "No",
        userStatus: 0,
      },
    }).then(({ body, status }) => {
      cy.log(body);
      cy.log(status);
      expect(status).to.eq(200);
    });
  });

  it("Delete", () => {
    cy.createUser({
      id: "50550550555",
      username: "Plushcake",
      firstName: "Cake",
      lastName: "cupcake ninja",
      email: "string",
      password: "string",
      phone: "string",
      userStatus: 1,
    });
    cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/Plushcake`,
    }).then(({ status }) => {
      cy.log(status);
      expect(status).to.eq(200);
    });
  });

  it("Deletion check", () => {
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/Plushcake`,
      failOnStatusCode: false,
    }).then(({ status }) => {
      cy.log(status);
      expect(status).to.eq(404);
    });
  });
});
