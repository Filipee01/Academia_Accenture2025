import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";

And("preenche todos os formulários corretamente, exceto o e-mail", () => {
  cy.fillVehicleData();
  cy.fillInsuranceForm();
  cy.fillProductData();
  cy.fillPriceOption();
  cy.sendProposalWithInvalidEmail();
});

And("tenta enviar a proposta", () => {
  cy.clickToSend();
});

Then("o sistema exibe uma mensagem de erro indicando e-mail inválido", () => {
  cy.checkErrorMessage();
});
