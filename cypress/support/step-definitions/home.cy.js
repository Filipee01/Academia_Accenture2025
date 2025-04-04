import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";

Given("que o usuario acessa o portal", () => {
  cy.acessaPortal();
});

And("acessa a opcao de automovel 'automobile'", () => {
  cy.acessaAutomovel();
});
