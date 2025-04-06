import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";

And("tenta avançar clicando em Next sem preencher os formularios", () => {
  cy.tryToSkip();
});

Then("o sistema exibe a mensagem para completar os passos anteriores", () => {
  cy.alertTabMessage();
});
