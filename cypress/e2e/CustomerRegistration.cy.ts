describe("Customer Registration Page", () => {
  it("renders the customer registration page without errors", () => {
    cy.visit("/cadastrodeclientes");
    cy.get("h1").should("contain", "Cadastrar Cliente");
    cy.get(".sc-kDnyCx").click();
    cy.url().should("include", "/home");
  });
  
  it("registers a customer successfully", () => {
    cy.visit("/cadastrodeclientes");
  
    // Preenche os campos do formulário
    cy.get(":nth-child(1) > :nth-child(1) > .sc-hLclGa").type("123");
    cy.get(":nth-child(2) > :nth-child(1) > .sc-hLclGa").type("Mikael Augusto");
    cy.get(":nth-child(1) > :nth-child(2) > .sc-hLclGa").type("123.456.789-00");
    cy.get(":nth-child(2) > :nth-child(2) > .sc-hLclGa").type("mikael@example.com");
  
    // Clica no botão de cadastrar
    cy.get("button").contains("Cadastrar").click();
  
    // Verifica se o cliente foi cadastrado com sucesso
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Cliente Cadastrado com sucesso!");
    });
  });
});
  