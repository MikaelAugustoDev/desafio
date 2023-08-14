describe("FinalizingPurchase", () => {
  beforeEach(() => {
    cy.visit("/assistentedepedido/notebook");
  });
  
  it("should display the payment method selection form by default", () => {
    cy.get(".sc-hTJqdO").should("exist");
  });
  
  it("should allow selecting 'Cartão' payment method and entering installment details", () => {
    cy.get("#cartao").click();
    cy.get(".sc-eKcIhx").type("3x");
    cy.get(".sc-hjcAwj").should("be.enabled");
  });
  
  it("should allow selecting 'Dinheiro' payment method", () => {
    cy.get("#dinheiro").click();
    cy.get(".sc-hjcAwj").should("be.enabled");
  });
  
  it("should allow selecting 'Outro' payment method and entering custom payment details", () => {
    cy.get("#outro").click();
    cy.get(".sc-oASGG").type("Bank Transfer");
    cy.get(".sc-hjcAwj").should("be.enabled");
  });
  
  it("should navigate to delivery form after clicking 'Continuar'", () => {
    cy.get("#cartao").click();
    cy.get(".sc-eKcIhx").type("3x");
    cy.get(".sc-hjcAwj").click();
    cy.get(".sc-jfLZDZ").should("exist");
  });
  
  it("should allow entering address details and enable 'Finalizar' button and to success page after clicking 'Finalizar'", () => {
    cy.get("#cartao").click();
    cy.get(".sc-eKcIhx").type("3x");
    cy.get(".sc-hjcAwj").click();
    cy.get(".sc-fbzYXw > :nth-child(1) > .sc-hLclGa").type("37476000");
    cy.get(".sc-GFXod > :nth-child(1) > .sc-hLclGa").type("Main Street");
    cy.get(".sc-GFXod > :nth-child(2) > .sc-hLclGa").type("Downtown");
    cy.get(".sc-GFXod > :nth-child(3) > .sc-hLclGa").type("123");
    cy.get(".sc-hjcAwj").click();
    cy.url().should("include", "/finalizado");
  });
  
  it("should navigate back to payment method form after clicking the back arrow", () => {
    cy.get("#cartao").click();
    cy.get(".sc-eKcIhx").type("3x");
    cy.get(".sc-hjcAwj").click();
    cy.get(".sc-egWZns").click();
    cy.get(".sc-hTJqdO").should("exist");
  });
});