import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";

When("é validado que o usuario esta na aba de 'Automobile Insurace'", () => {
  cy.automobileInsurace();
});

And("o usuario insere os dados do veiculo", () => {
  cy.fillVehicleData();
});

And("o usuario insere os dados do seguro", () => {
  cy.fillInsuranceForm();
});

And("o usuario insere os dados do produto", () => {
  cy.fillProductData();
});

And("o usuario seleciona uma opcao de preco", () => {
  cy.fillPriceOption();
});

And("o usuario envia a proposta", () => {
  cy.sendProposal();
});
