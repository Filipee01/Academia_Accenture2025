import moment from "moment";
import { selectorsList } from "./selectors";

Cypress.Commands.add("fillProductData", () => {
  cy.get(selectorsList.ABA_PRODUCT_DATA).should("be.visible");
  cy.log("Aba de Product Data acessada com sucesso!");
  cy.get(selectorsList.START_DATE).type(
    moment().add(1, "month").add(1, "day").format("MM/DD/YYYY") // Adiciona mais de um mês no futuro
  );
  cy.get(selectorsList.INSURACE_SUM).select(Math.floor(Math.random() * 9) + 1); // 1-9
  cy.get(selectorsList.MERIT_RATING).select(Math.floor(Math.random() * 18) + 1); // 1-18
  cy.get(selectorsList.DAMAGE_INSURANCE).select(
    Math.floor(Math.random() * 3) + 1
  ); // 1-3
  cy.get(selectorsList.OPTIONAL_PRODUCTS).click({ force: true });
  cy.get(selectorsList.COURTESY_CAR).select(Math.floor(Math.random() * 2) + 1); // 1-2
  cy.get(selectorsList.MANDATORY_FORM).should("not.exist");
  cy.log("Validado que os campos obrigatórios estão preenchidos!");
  cy.get(selectorsList.BTN_NEXT_PRODUCT).click();
  cy.log("Dados do produto preenchidos com sucesso!");
});
