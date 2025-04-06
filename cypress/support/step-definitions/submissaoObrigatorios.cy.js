import { And, Then } from "cypress-cucumber-preprocessor/steps";

Then("o usuario envia a proposta com os dados obrigatorios", () => {
  cy.sendProposalMandatory();
});
