// Testando a rota de registro de produtos

describe("Product Registration Page", () => {
  it("renders the product registration page without errors", () => {
    cy.visit("/cadastrodeprodutos");
    cy.get("h1").should("contain", "Cadastre seu Produto");
  });
});
  
describe("Product Registration Page", () => {
  it("registers a product successfully", () => {
    cy.visit("/cadastrodeprodutos");

    cy.get(":nth-child(1) > .sc-hLclGa").type("Product Name");
    cy.get(":nth-child(2) > .sc-hLclGa").type("99.99");
    cy.get(":nth-child(3) > .sc-hLclGa").type("100");
    cy.get("#check").check();
    cy.get(".sc-iJfdHH").type("Product description");
  
    // Clica no botão de cadastrar
    cy.get("button").contains("Cadastrar Produto").click();
  
    // Verifica se o produto foi cadastrado com sucesso
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Produto Cadastrado com sucesso!");
    });
  });
});
  