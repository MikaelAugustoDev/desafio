describe("OrderAssistant", () => {
  beforeEach(() => {
    cy.visit("/assistentedepedido");
  });
  
  it("should initially display the customer selection screen", () => {
    cy.get(".sc-eflkNB").should("exist");
  });
  
  it("should allow selecting a customer", () => {
    cy.get(".sc-jOHGOj > :nth-child(1)").click();
    cy.get(".sc-cOqaIB").should("exist");
  });
  
  it("should allow selecting a product after selecting a customer", () => {
    cy.get(".sc-jOHGOj > :nth-child(1)").click();
    cy.get(".sc-cOqaIB > :nth-child(1)").click();
    cy.url().should("include", "/assistentedepedido");
  });
  
  it("should allow returning to the customer selection screen", () => {
    cy.get(".sc-jOHGOj > :nth-child(1)").click();
    cy.get(".sc-AOXSc").click();
    cy.get(".sc-jOHGOj").should("exist");
  });
});
  