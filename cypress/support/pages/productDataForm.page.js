import moment from "moment";

const selectorsProductData = {
  START_DATE: "#startdate",
  INSURACE_SUM: "#insurancesum",
  MERIT_RATING: "#meritrating",
  DAMAGE_INSURANCE: "#damageinsurance",
  OPTIONAL_PRODUCTS:
    Math.random() < 0.5 ? "#EuroProtection" : "#LegalDefenseInsurance",
  COURTESY_CAR: "#courtesycar",
  BTN_NEXT_PRODUCT: "#nextselectpriceoption",
};

Cypress.Commands.add("fillProductData", () => {
  cy.get(selectorsProductData.START_DATE).type(
    moment().add(1, "month").add(1, "day").format("MM/DD/YYYY") // Adiciona mais de um mês no futuro
  );
  cy.get(selectorsProductData.INSURACE_SUM).select(
    Math.floor(Math.random() * 9) + 1
  ); // 1-9
  cy.get(selectorsProductData.MERIT_RATING).select(
    Math.floor(Math.random() * 18) + 1
  ); // 1-18
  cy.get(selectorsProductData.DAMAGE_INSURANCE).select(
    Math.floor(Math.random() * 3) + 1
  ); // 1-3
  cy.get(selectorsProductData.OPTIONAL_PRODUCTS).click({ force: true });
  cy.get(selectorsProductData.COURTESY_CAR).select(
    Math.floor(Math.random() * 2) + 1
  ); // 1-2
  cy.get(selectorsProductData.BTN_NEXT_PRODUCT).click();
  cy.log("Dados do produto preenchidos com sucesso!");
});
