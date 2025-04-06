import { When, And, Then } from "cypress-cucumber-preprocessor/steps";

And("preenche o último formulário deixando e-mail inválido", () => {
  cy.fillWithInvalidEmail();
});

When("tenta enviar a proposta", () => {
  cy.clickToSend();
});

Then("o sistema exibe uma mensagem de erro indicando e-mail inválido", () => {
  cy.checkErrorMessage();
});
