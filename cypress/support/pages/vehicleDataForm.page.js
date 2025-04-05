import { faker } from "@faker-js/faker";
import moment from "moment";

const selectors_vehicleData = {
  ID_PAGE: "#selectedinsurance",
  MAKE: "#make",
  ENGINE: "#engineperformance",
  DATE: "#dateofmanufacture",
  NUMBER_OF_SEATS: "#numberofseats",
  FUEL_TYPE: "#fuel",
  LIST_PRICE: "#listprice",
  LICENCE_PLATE: "#licenseplatenumber",
  ANNUAL_MILEAGE: "#annualmileage",
  BTN_NEXT: "#nextenterinsurantdata",
};

Cypress.Commands.add("automobileInsurace", () => {
  cy.get(selectors_vehicleData.ID_PAGE).should("be.visible");
  cy.log("Automobile Insurance está visível");
});

Cypress.Commands.add("fillVehicleData", () => {
  cy.get(selectors_vehicleData.MAKE).select(Math.floor(Math.random() * 15) + 1);
  cy.get(selectors_vehicleData.ENGINE).type(
    Math.floor(Math.random() * 2000) + 1
  );
  cy.get(selectors_vehicleData.DATE).type(
    moment(faker.date.past()).format("MM/DD/YYYY")
  );
  cy.get(selectors_vehicleData.NUMBER_OF_SEATS).select(
    Math.floor(Math.random() * 9) + 1
  );
  cy.get(selectors_vehicleData.FUEL_TYPE).select(
    Math.floor(Math.random() * 5) + 1
  );
  cy.get(selectors_vehicleData.LIST_PRICE).type(
    Math.floor(Math.random() * (100000 - 500 + 1)) + 500
  );
  cy.get(selectors_vehicleData.LICENCE_PLATE).type(faker.vehicle.vrm());
  cy.get(selectors_vehicleData.ANNUAL_MILEAGE).type(
    Math.floor(Math.random() * (100000 - 100)) + 100
  );
  cy.get(selectors_vehicleData.BTN_NEXT).click();
  cy.log("Dados do veículo preenchidos com sucesso!");
});
