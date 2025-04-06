import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuario acessa o portal", () => {
  cy.acessaPortal();
});

And("acessa a opcao de automovel automobile", () => {
  cy.acessaAutomovel();
});

And("é validado que o usuario esta na aba de Automobile Insurace", () => {
  cy.automobileInsurace();
});

And("o usuario insere os dados {string} do veiculo", (tipo) => {
  cy.fillVehicleData(tipo);
});

And("o usuario insere os dados {string} do seguro", (tipo) => {
  cy.fillInsuranceForm(tipo);
});

And("o usuario insere os dados do produto", (tipo) => {
  cy.fillProductData(tipo);
});

When("o usuario seleciona uma opcao de preco", () => {
  cy.fillPriceOption();
});

Then("o usuario envia a proposta", () => {
  cy.sendProposal();
});
