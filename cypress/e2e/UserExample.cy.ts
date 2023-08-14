describe("example of user using the website", () => {
  it("user logging in and going to product registration", () => {
    cy.visit("/");
    cy.get(":nth-child(1) > .sc-hLclGa").type("teste@gmail.com");
    cy.get(":nth-child(2) > .sc-hLclGa").type("1234");
    cy.get(".sc-ftLKQv").click();
    cy.url().should("include", "/home");
  });
  it("registering a new product", () => {
    cy.visit("/cadastrodeprodutos");
    cy.get(":nth-child(1) > .sc-hLclGa").type("Bicicleta");
    cy.get(":nth-child(2) > .sc-hLclGa").type("1280");
    cy.get(":nth-child(3) > .sc-hLclGa").type("50");
    cy.get("#check").check();
    cy.get(".sc-iJfdHH").type("Bicicleta para pedalada em montanha");
    cy.get("button").contains("Cadastrar Produto").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Produto Cadastrado com sucesso!");
    });
  });
  it("registering a new client", () => {
    cy.visit("/cadastrodeclientes");
    cy.get(":nth-child(1) > :nth-child(1) > .sc-hLclGa").type("1");
    cy.get(":nth-child(2) > :nth-child(1) > .sc-hLclGa").type("Mikael Augusto");
    cy.get(":nth-child(1) > :nth-child(2) > .sc-hLclGa").type("123.456.789-00");
    cy.get(":nth-child(2) > :nth-child(2) > .sc-hLclGa").type("mikaelaugustodev@gmail.com");
    cy.get("button").contains("Cadastrar").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Cliente Cadastrado com sucesso!");
    });
  });
  it("selecting the payment method and filling in the address", () => {
    cy.visit("/assistentedepedido/notebook");
    cy.get("#cartao").click();
    cy.get(".sc-eKcIhx").type("12x");
    cy.get(".sc-hjcAwj").click();
    cy.get(".sc-fbzYXw > :nth-child(1) > .sc-hLclGa").type("37476000");
    cy.get(".sc-GFXod > :nth-child(1) > .sc-hLclGa").type("Presidente Delfim Moreira");
    cy.get(".sc-GFXod > :nth-child(2) > .sc-hLclGa").type("Vila Esperança");
    cy.get(".sc-GFXod > :nth-child(3) > .sc-hLclGa").type("230");
    cy.get(".sc-hjcAwj").click();
    cy.url().should("include", "/finalizado");
    cy.get(".sc-kIuKII").click();
  });
});