import { faker } from "@faker-js/faker";
import moment from "moment";
import {
  ID_PAGE,
  MAKE,
  ENGINE,
  DATE,
  NUMBER_OF_SEATS,
  FUEL_TYPE,
  LIST_PRICE,
  LICENCE_PLATE,
  ANNUAL_MILEAGE,
  BTN_NEXT,
  FIRST_NAME,
  LAST_NAME,
  DATE_OF_BIRTH,
  GENDER,
  STREET_ADDRESS,
  COUNTRY,
  ZIP_CODE,
  getValidZipCode,
  CITY,
  OCCUPATION,
  HOBBIES_RANDOM,
  WEBSITE,
  PICTURE,
  BTN_NEXT_INSURANCE,
  START_DATE,
  INSURACE_SUM,
  MERIT_RATING,
  DAMAGE_INSURANCE,
  OPTIONAL_PRODUCTS,
  COURTESY_CAR,
  BTN_NEXT_PRODUCT,
  PRICE_OPTION,
  INPUT_PRICE,
  BTN_NEXT_PRICE,
  INPUT_EMAIL,
  INPUT_PHONE,
  INPUT_USERNAME,
  INPUT_PASSWORD,
  INPUT_CONFIRM_PASSWORD,
  INPUT_COMMENTS,
  BTN_SEND,
} from "./selectors";

Cypress.Commands.add("automobileInsurace", () => {
  cy.get(ID_PAGE).should("be.visible");
  cy.log("Automobile Insurance está visível");
});

Cypress.Commands.add("fillVehicleData", () => {
  cy.get(MAKE).select(Math.floor(Math.random() * 15) + 1);
  cy.get(ENGINE).type(Math.floor(Math.random() * 2000) + 1);
  cy.get(DATE).type(moment(faker.date.past()).format("MM/DD/YYYY"));
  cy.get(NUMBER_OF_SEATS).select(Math.floor(Math.random() * 9) + 1);
  cy.get(FUEL_TYPE).select(Math.floor(Math.random() * 5) + 1);
  cy.get(LIST_PRICE).type(Math.floor(Math.random() * (100000 - 500 + 1)) + 500);
  cy.get(LICENCE_PLATE).type(faker.vehicle.vrm());
  cy.get(ANNUAL_MILEAGE).type(Math.floor(Math.random() * (100000 - 100)) + 100);
  cy.get(BTN_NEXT).click();
  cy.log("Dados do veículo preenchidos com sucesso!");
});

Cypress.Commands.add("fillInsuranceForm", () => {
  cy.get(FIRST_NAME).type(faker.person.firstName().replace(/[^a-zA-Z]/g, ""));
  cy.get(LAST_NAME).type(faker.person.lastName().replace(/[^a-zA-Z]/g, ""));
  cy.get(DATE_OF_BIRTH).type(
    moment(
      faker.date.between({
        from: moment().subtract(70, "years").toDate(),
        to: moment().subtract(18, "years").toDate(),
      })
    ).format("MM/DD/YYYY")
  );
  cy.get(GENDER).click({ force: true });
  cy.get(STREET_ADDRESS).type(faker.location.streetAddress(true));
  cy.get(COUNTRY)
    .find("option") // Captura todas as opções do dropdown
    .then((options) => {
      const validOptions = [...options]
        .map((o) => o.value) // Extrai os valores das opções
        .filter((v) => v !== "default"); // Remove a opção padrão (se houver)
      const randomCountry =
        validOptions[Math.floor(Math.random() * validOptions.length)];
      cy.get(COUNTRY).select(randomCountry); // Seleciona o país aleatório
    });
  cy.get(ZIP_CODE).type(getValidZipCode());
  cy.get(CITY).type(faker.location.city());
  cy.get(OCCUPATION).select(Math.floor(Math.random() * 5) + 1); // 1-6
  cy.contains(HOBBIES_RANDOM.trim()).click({ force: true });
  cy.get(WEBSITE).type(faker.internet.url());
  cy.get(PICTURE).selectFile("cypress/assets/photo.jpg", { force: true });
  cy.get(BTN_NEXT_INSURANCE).click();
  cy.log("Dados do seguro preenchidos com sucesso!");
});

Cypress.Commands.add("fillProductData", () => {
  cy.get(START_DATE).type(
    moment().add(1, "month").add(1, "day").format("MM/DD/YYYY") // Adiciona mais de um mês no futuro
  );
  cy.get(INSURACE_SUM).select(Math.floor(Math.random() * 9) + 1); // 1-9
  cy.get(MERIT_RATING).select(Math.floor(Math.random() * 18) + 1); // 1-18
  cy.get(DAMAGE_INSURANCE).select(Math.floor(Math.random() * 3) + 1); // 1-3
  cy.get(OPTIONAL_PRODUCTS).click({ force: true });
  cy.get(COURTESY_CAR).select(Math.floor(Math.random() * 2) + 1); // 1-2
  cy.get(BTN_NEXT_PRODUCT).click();
  cy.log("Dados do produto preenchidos com sucesso!");
});

Cypress.Commands.add("fillPriceOption", () => {
  cy.get(PRICE_OPTION[INPUT_PRICE]).click({ force: true });
  cy.wait(1200);
  cy.get(BTN_NEXT_PRICE).click({ force: true });
  cy.log("Opção de preço preenchida com sucesso!");
});

Cypress.Commands.add("sendProposal", () => {
  cy.get(INPUT_EMAIL).type(Cypress.env("email"), { log: false });
  cy.get(INPUT_PHONE).type(Cypress.env("phone"), { log: false });
  cy.get(INPUT_USERNAME).type(Cypress.env("userName"), { log: false });
  cy.get(INPUT_PASSWORD).type(Cypress.env("password"), { log: false });
  cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env("password"), { log: false });
  cy.get(INPUT_COMMENTS).type(faker.lorem.paragraph(1));
  cy.get(BTN_SEND).click();
  cy.wait(6000);
  cy.get(".sweet-alert").should("be.visible");
  cy.log("Dados da proposta enviados com sucesso!");
});
