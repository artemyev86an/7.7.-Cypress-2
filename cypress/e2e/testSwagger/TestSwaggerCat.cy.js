describe("SwaggerCat", () => {
  it("Create", () => {
    cy.createPet({
      id: "050778845",
      category: {
        id: 0,
        name: "Хлебушек",
      },
      name: "dogs",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    }).then(({ body, status }) => {
      cy.log(JSON.stringify(body));
      cy.log(status);
      expect(status).to.eq(200);
    });
  });
  it("Put", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/pet",
      body: {
        id: 1,
        category: {
          id: 0,
          name: "Хлебушек",
        },
        name: "cats",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      },
    }).then(({ body, status }) => {
      cy.log(body);
      cy.log(status);
      expect(status).to.eq(200);
    });
  });
  it("Delete", () => {
    cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/pet/050778845`,
    }).then(({ status }) => {
      cy.log(status);
      expect(status).to.eq(200);
    });
  });
});
