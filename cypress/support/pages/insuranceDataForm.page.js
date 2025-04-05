import { faker } from "@faker-js/faker";
import moment from "moment";

const HOBBIES_CATEGORY = [
  "#speeding",
  "#bungeejumping",
  "#cliffdiving",
  "#skydiving",
  "#other",
];

const RANDOM_CATEGORY = () => {
  const index = Math.floor(Math.random() * HOBBIES_CATEGORY.length);
  return HOBBIES_CATEGORY[index];
};

const HOBBIES_RANDOM = RANDOM_CATEGORY();

const selectorsInsuraceData = {
  FIRST_NAME: "#firstname",
  LAST_NAME: "#lastname",
  DATE_OF_BIRTH: "#birthdate",
  GENDER: Math.random() < 0.5 ? "#gendermale" : "#genderfemale",
  STREET_ADDRESS: "#streetaddress",
  COUNTRY: "#country",
  ZIP_CODE: "#zipcode",
  getValidZipCode: () => {
    let zip;
    do {
      zip = faker.location.zipCode().replace(/\D/g, ""); // Remove caracteres não numéricos
    } while (zip.length < 4 || zip.length > 8); // Garante que tenha entre 4 e 8 dígitos
    return zip;
  },
  CITY: "#city",
  OCCUPATION: "#occupation",
  WEBSITE: "#website",
  PICTURE: "#picturecontainer",
  BTN_NEXT_INSURANCE: "#nextenterproductdata",
};

Cypress.Commands.add("fillInsuranceForm", () => {
  cy.get(selectorsInsuraceData.FIRST_NAME).type(
    faker.person.firstName().replace(/[^a-zA-Z]/g, "")
  );
  cy.get(selectorsInsuraceData.LAST_NAME).type(
    faker.person.lastName().replace(/[^a-zA-Z]/g, "")
  );
  cy.get(selectorsInsuraceData.DATE_OF_BIRTH).type(
    moment(
      faker.date.between({
        from: moment().subtract(70, "years").toDate(),
        to: moment().subtract(18, "years").toDate(),
      })
    ).format("MM/DD/YYYY")
  );
  cy.get(selectorsInsuraceData.GENDER).click({ force: true });
  cy.get(selectorsInsuraceData.STREET_ADDRESS).type(
    faker.location.streetAddress(true)
  );
  cy.get(selectorsInsuraceData.COUNTRY)
    .find("option") // Captura todas as opções do dropdown
    .then((options) => {
      const validOptions = [...options]
        .map((o) => o.value) // Extrai os valores das opções
        .slice(1); // Remove a opção padrão (se houver)
      const randomCountry =
        validOptions[Math.floor(Math.random() * validOptions.length)];
      cy.get(selectorsInsuraceData.COUNTRY).select(randomCountry); // Seleciona o país aleatório
    });
  cy.get(selectorsInsuraceData.ZIP_CODE).type(
    selectorsInsuraceData.getValidZipCode()
  );
  cy.get(selectorsInsuraceData.CITY).type(faker.location.city());
  cy.get(selectorsInsuraceData.OCCUPATION).select(
    Math.floor(Math.random() * 5) + 1
  ); // 1-6
  cy.get(HOBBIES_RANDOM.trim()).click({ force: true });
  cy.get(selectorsInsuraceData.WEBSITE).type(faker.internet.url());
  cy.get(selectorsInsuraceData.PICTURE).selectFile("cypress/assets/photo.jpg", {
    force: true,
  });
  cy.get(selectorsInsuraceData.BTN_NEXT_INSURANCE).click();
  cy.log("Dados do seguro preenchidos com sucesso!");
});
