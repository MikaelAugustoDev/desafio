describe("LoginForm", () => {
  beforeEach(() => {
    cy.visit("/"); // Supondo que a página com o LoginForm está acessível em "/"
  });

  it("renders LoginForm component without errors", () => {
    cy.get("form").should("exist");
    cy.get(":nth-child(1) > .sc-hLclGa").should("exist");
    cy.get(":nth-child(2) > .sc-hLclGa").should("exist");
    cy.get(".sc-ftLKQv").should("exist");
    cy.get("span").should("not.exist");
  });

  it("navigates to /home when email and password are correct", () => {
    cy.get(":nth-child(1) > .sc-hLclGa").type("teste@gmail.com");
    cy.get(":nth-child(2) > .sc-hLclGa").type("1234");
    cy.get("form").submit();
    cy.url().should("eq", "http://localhost:5173/home"); // Supondo que o redirecionamento está correto
  });

  it("shows error message for incorrect email or password", () => {
    cy.get(":nth-child(1) > .sc-hLclGa").type("incorrect@gmail.com");
    cy.get(":nth-child(2) > .sc-hLclGa").type("5678");
    cy.get("form").submit();
    cy.get("span").should("contain.text", "Usuario ou senha incorretos");
  });
});
