import { faker } from "@faker-js/faker";
import { selectorsList } from "./selectors";

Cypress.Commands.add("sendProposal", () => {
  cy.get(selectorsList.ABA_SEND_QUOTE).should("be.visible");
  cy.log("Aba do Send Quote acessada com sucesso!");
  cy.get(selectorsList.INPUT_EMAIL).type(Cypress.env("email"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_PHONE).type(Cypress.env("phone"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_USERNAME).type(Cypress.env("userName"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_PASSWORD).type(Cypress.env("password"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_CONFIRM_PASSWORD).type(Cypress.env("password"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_COMMENTS).type(faker.lorem.paragraph(1));
  cy.get(selectorsList.MANDATORY_FORM).should("not.exist");
  cy.log("Validado que os campos obrigatórios estão preenchidos!");
  cy.get(selectorsList.BTN_SEND).click();
  cy.get(selectorsList.POP_UP, { timeout: 15000 }).should("be.visible");
  cy.log("Dados da proposta enviados com sucesso!");
});

//variacao para o caso de teste negativo credenciais inválidas
Cypress.Commands.add("sendProposalWithInvalidEmail", () => {
  cy.get(selectorsList.ABA_SEND_QUOTE).should("be.visible");
  cy.log("Aba do Send Quote acessada com sucesso!");
  cy.get(selectorsList.INPUT_EMAIL).type("email_invalido@", { log: false });
  cy.get(selectorsList.INPUT_PHONE).type(Cypress.env("phone"), { log: false });
  cy.get(selectorsList.INPUT_USERNAME).type(Cypress.env("userName"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_PASSWORD).type(Cypress.env("password"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_CONFIRM_PASSWORD).type(Cypress.env("password"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_COMMENTS).type(faker.lorem.paragraph(1));
});

Cypress.Commands.add("clickToSend", () => {
  cy.get(selectorsList.BTN_SEND).click();
});

Cypress.Commands.add("checkErrorMessage", () => {
  cy.get(selectorsList.POP_UP).find("p").should("be.visible");
  cy.log("exibe um pop up com uma mensagem de que existem dados faltando");
});

// variacao para o caso de teste negativo submissao com dados obrigatorios
Cypress.Commands.add("sendProposalMandatory", () => {
  cy.get(selectorsList.ABA_SEND_QUOTE).should("be.visible");
  cy.log("Aba do Send Quote acessada com sucesso!");
  cy.get(selectorsList.INPUT_EMAIL).type(Cypress.env("email"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_PHONE).type(Cypress.env("phone"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_USERNAME).type(Cypress.env("userName"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_PASSWORD).type(Cypress.env("password"), {
    log: false,
  });
  cy.get(selectorsList.INPUT_CONFIRM_PASSWORD).type(Cypress.env("password"), {
    log: false,
  });
  cy.get(selectorsList.MANDATORY_FORM).should("not.exist");
  cy.log("Validado que os campos obrigatórios estão preenchidos!");
  cy.get(selectorsList.BTN_SEND).click();
  cy.get(selectorsList.POP_UP, { timeout: 15000 }).should("be.visible");
  cy.log("Dados da proposta enviados com sucesso!");
});
