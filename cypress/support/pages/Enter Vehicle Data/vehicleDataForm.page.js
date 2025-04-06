import { faker } from "@faker-js/faker";
import moment from "moment";
import { selectorsList } from "./selectors";

Cypress.Commands.add("automobileInsurace", () => {
  cy.get(selectorsList.ID_PAGE).should("be.visible");
  cy.log("Automobile Insurance está visível");
});

Cypress.Commands.add("fillVehicleData", () => {
  cy.get(selectorsList.ABA_VEHICLE_DATA).should("be.visible");
  cy.log("aba do Vehicle Data acessada com sucesso!");
  cy.get(selectorsList.MAKE).select(Math.floor(Math.random() * 15) + 1);
  cy.get(selectorsList.ENGINE).type(Math.floor(Math.random() * 2000) + 1);
  cy.get(selectorsList.DATE).type(
    moment(faker.date.past()).format("MM/DD/YYYY")
  );
  cy.get(selectorsList.NUMBER_OF_SEATS).select(
    Math.floor(Math.random() * 9) + 1
  );
  cy.get(selectorsList.FUEL_TYPE).select(Math.floor(Math.random() * 5) + 1);
  cy.get(selectorsList.LIST_PRICE).type(
    Math.floor(Math.random() * (100000 - 500 + 1)) + 500
  );
  cy.get(selectorsList.LICENCE_PLATE).type(faker.vehicle.vrm());
  cy.get(selectorsList.ANNUAL_MILEAGE).type(
    Math.floor(Math.random() * (100000 - 100)) + 100
  );
  cy.get(selectorsList.MANDATORY_FORM).should("not.exist");
  cy.log("Validado que os campos obrigatórios estão preenchidos!");
  cy.get(selectorsList.BTN_NEXT).click();
  cy.log("Dados do veículo preenchidos com sucesso!");
});

Cypress.Commands.add("fillVehicleData", () => {
  cy.get(selectorsList.ABA_VEHICLE_DATA).should("be.visible");
  cy.log("aba do Vehicle Data acessada com sucesso!");
  cy.get(selectorsList.MAKE).select(Math.floor(Math.random() * 15) + 1);
  cy.get(selectorsList.ENGINE).type(Math.floor(Math.random() * 2000) + 1);
  cy.get(selectorsList.DATE).type(
    moment(faker.date.past()).format("MM/DD/YYYY")
  );
  cy.get(selectorsList.NUMBER_OF_SEATS).select(
    Math.floor(Math.random() * 9) + 1
  );
  cy.get(selectorsList.FUEL_TYPE).select(Math.floor(Math.random() * 5) + 1);
  cy.get(selectorsList.LIST_PRICE).type(
    Math.floor(Math.random() * (100000 - 500 + 1)) + 500
  );
  cy.get(selectorsList.LICENCE_PLATE).type(faker.vehicle.vrm());
  cy.get(selectorsList.ANNUAL_MILEAGE).type(
    Math.floor(Math.random() * (100000 - 100)) + 100
  );
  cy.get(selectorsList.MANDATORY_FORM).should("not.exist");
  cy.log("Validado que os campos obrigatórios estão preenchidos!");
  cy.get(selectorsList.BTN_NEXT).click();
  cy.log("Dados do veículo preenchidos com sucesso!");
});
