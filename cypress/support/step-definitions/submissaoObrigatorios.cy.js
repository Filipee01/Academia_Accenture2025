import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";

And("o usuario insere os dados obrigatorios do seguro", () => {
  cy.fillInsuranceFormMandatory();
});

Then("o usuario envia a proposta com os dados obrigatorios", () => {
  cy.sendProposalMandatory();
});

//vendo a mesangem de sucesso
