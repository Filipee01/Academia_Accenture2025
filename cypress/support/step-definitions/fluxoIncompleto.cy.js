import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("tenta avançar clicando em Next sem preencher os formularios", () => {
  cy.tryToSkip();
});

Then("o sistema exibe a mensagem para completar os passos anteriores", () => {
  cy.alertTabMessage();
});
