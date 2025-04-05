import { faker } from "@faker-js/faker";

const selectorsSendQuote = {
  INPUT_EMAIL: "#email",
  INPUT_PHONE: "#phone",
  INPUT_USERNAME: "#username",
  INPUT_PASSWORD: "#password",
  INPUT_CONFIRM_PASSWORD: "#confirmpassword",
  INPUT_COMMENTS: "#Comments",
  BTN_SEND: "#sendemail",
  POP_UP: ".sweet-alert",
};

Cypress.Commands.add("sendProposal", () => {
  cy.get(selectorsSendQuote.INPUT_EMAIL).type(Cypress.env("email"), {
    log: false,
  });
  cy.get(selectorsSendQuote.INPUT_PHONE).type(Cypress.env("phone"), {
    log: false,
  });
  cy.get(selectorsSendQuote.INPUT_USERNAME).type(Cypress.env("userName"), {
    log: false,
  });
  cy.get(selectorsSendQuote.INPUT_PASSWORD).type(Cypress.env("password"), {
    log: false,
  });
  cy.get(selectorsSendQuote.INPUT_CONFIRM_PASSWORD).type(
    Cypress.env("password"),
    { log: false }
  );
  cy.get(selectorsSendQuote.INPUT_COMMENTS).type(faker.lorem.paragraph(1));
  cy.get(selectorsSendQuote.BTN_SEND).click();
  cy.get(selectorsSendQuote.POP_UP, { timeout: 15000 }).should("be.visible");
  cy.log("Dados da proposta enviados com sucesso!");
});
