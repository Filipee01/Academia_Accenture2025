import { selectorsList } from "./selectors";

Cypress.Commands.add("fillPriceOption", () => {
  cy.get(selectorsList.ABA_PRICE_OPTION).should("be.visible");
  cy.log("Aba de Select Price Option acessada com sucesso!");
  cy.get(selectorsList.PRICE_OPTION[selectorsList.INPUT_PRICE]).click({
    force: true,
  });
  cy.get(selectorsList.MANDATORY_FORM).should("not.exist"); // // valido se a classe invalid não existe, se n existe é pq os campos obrigatórios estão preenchidos
  cy.log("Validado que os campos obrigatórios estão preenchidos!");
  cy.get(selectorsList.COUNTER).should("be.visible"); // // valido se o contador está zerado
  cy.log("Validado que o contador está zerado e não há nada a preencher!");
  cy.get(selectorsList.BTN_NEXT_PRICE).click({ force: true });
  cy.log("Opção de preço preenchida com sucesso!");
});

//caso negativo
Cypress.Commands.add("alertTabMessage", () => {
  cy.get(selectorsList.PREVIOUS_MSG).find("p").should("be.visible"); // valido se a mensagem de erro está visível
  cy.log(
    "O usuário não preencheu os formulários e o sistema alerta com uma mensagem de erro!"
  );
});
