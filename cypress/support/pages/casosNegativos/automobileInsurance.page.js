const selectorsAutomobile = {
  BTN_NEXT_VEHICLE: "#nextenterinsurantdata",
  BTN_NEXT_INSURANT: "#nextenterproductdata",
  BTN_NEXT_PRODUCT: "#nextselectpriceoption",
};

Cypress.Commands.add("tryToSkip", () => {
  cy.get(selectorsAutomobile.BTN_NEXT_VEHICLE).click();
  cy.get(selectorsAutomobile.BTN_NEXT_INSURANT).click();
  cy.get(selectorsAutomobile.BTN_NEXT_PRODUCT).click();
});
