const PRICE_OPTION = [
  "#selectsilver",
  "#selectgold",
  "#selectplatinum",
  "#selectultimate",
];

const selectorPriceOption = {
  INPUT_PRICE: Math.floor(Math.random() * PRICE_OPTION.length),
  BTN_NEXT_PRICE: "#nextsendquote",
};

Cypress.Commands.add("fillPriceOption", () => {
  cy.get(PRICE_OPTION[selectorPriceOption.INPUT_PRICE]).click({ force: true });
  cy.wait(1200);
  cy.get(selectorPriceOption.BTN_NEXT_PRICE).click({ force: true });
  cy.log("Opção de preço preenchida com sucesso!");
});
