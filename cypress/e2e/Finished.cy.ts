// Testando a rota de pedido finalizado

describe("Finished Page", () => {
  beforeEach(() => {
    cy.visit("/finalizado");
  });
  
  it("should display the successful purchase information", () => {
    cy.get(".sc-UhFNL").should("exist");
    cy.get(".sc-jNRKYE").should("exist");
    cy.get(".sc-dtgxmn").should("exist");
  });
  
  it("should display the correct payment method details", () => {
    cy.get(".sc-jTIKuF").should("exist");
  });
});