const BTN_AUTOMOBILE = "#nav_automobile";

Cypress.Commands.add("acessaPortal", () => {
  cy.visit("/");
  cy.log("Portal acessado com sucesso!");
});

Cypress.Commands.add("acessaAutomovel", () => {
  cy.get(BTN_AUTOMOBILE).click();
  cy.log("Acessou a área de cadastro de automóvel com sucesso!");
});
