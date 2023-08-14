describe("Home", () => {
  beforeEach(() => {
    cy.visit("/home");
  });
  
  it("renders Header component", () => {
    cy.get("header").should("exist");
  });
  
  it("renders main content with correct message", () => {
    cy.get("main").should("exist");
    cy.get("h1").should("contain.text", "Olá, me chamo Mikael e este é o desafio que me mandaram!");
  });
  
  it("checks if main content is centered and styled properly", () => {
    cy.get("main").should("have.css", "display", "flex");
    cy.get("main").should("have.css", "align-items", "center");
    cy.get("main").should("have.css", "justify-content", "center");
    cy.get("main").should("have.css", "padding", "50px");
    cy.get("h1").should("have.css", "color", "rgb(51, 51, 51)");
    cy.get("h1").should("have.css", "font-size", "20px");
    cy.get("h1").should("have.css", "text-align", "center");
  });
});
  