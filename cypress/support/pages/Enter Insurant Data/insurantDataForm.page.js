import { faker } from "@faker-js/faker";
import moment from "moment";
import { selectorsList } from "./selectors";

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

const HOBBIES_RANDOM = RANDOM_CATEGORY(); // Seleciono uma categoria aleatória de hobbies

const getValidZipCode = () => {
  let zip;
  do {
    zip = faker.location.zipCode().replace(/\D/g, ""); // Removo caracteres não numéricos
  } while (zip.length < 4 || zip.length > 8); // Garanto que tenha entre 4 e 8 dígitos
  return zip;
};

/// Comando para preencher o formulário de dados do segurado
Cypress.Commands.add("fillInsuranceForm", (tipo = "obrigatorios") => {
  cy.get(selectorsList.ABA_INSURANCE_DATA).should("be.visible");
  cy.log("Aba do Insurance Data acessada com sucesso!");

  // Campos obrigatórios
  cy.get(selectorsList.FIRST_NAME).type(
    faker.person.firstName().replace(/[^a-zA-Z]/g, "")
  );
  cy.get(selectorsList.LAST_NAME).type(
    faker.person.lastName().replace(/[^a-zA-Z]/g, "")
  );
  cy.get(selectorsList.DATE_OF_BIRTH).type(
    moment(
      faker.date.between({
        from: moment().subtract(70, "years").toDate(),
        to: moment().subtract(18, "years").toDate(),
      })
    ).format("MM/DD/YYYY")
  );
  // Campos opcionais só se for tipo 'completos'
  if (tipo === "completos") {
    cy.get(selectorsList.GENDER).click({ force: true });
    cy.get(selectorsList.STREET_ADDRESS).type(
      faker.location.streetAddress(true)
    );
  }
  cy.get(selectorsList.COUNTRY)
    .find("option") // Seleciono o elemento <select> de country
    .then((options) => {
      // Pego todos os elementos <option> dentro do <select>
      const validOptions = [...options].map((o) => o.value).slice(1); // Pego os valores válidos (excluindo o primeiro, que é vazio)
      const randomCountry =
        validOptions[Math.floor(Math.random() * validOptions.length)];
      cy.get(selectorsList.COUNTRY).select(randomCountry); // Seleciono o país aleatório
    });
  cy.get(selectorsList.ZIP_CODE).type(getValidZipCode());
  if (tipo === "completos") {
    cy.get(selectorsList.CITY).type(faker.location.city());
  }
  cy.get(selectorsList.OCCUPATION).select(Math.floor(Math.random() * 5) + 1);
  cy.get(HOBBIES_RANDOM.trim()).click({ force: true });
  if (tipo === "completos") {
    cy.get(selectorsList.WEBSITE).type(faker.internet.url());
    cy.get(selectorsList.PICTURE).selectFile("cypress/assets/photo.jpg", {
      force: true,
    });
  }
  cy.get(selectorsList.MANDATORY_FORM).should("not.exist");
  cy.log("Validado que os campos obrigatórios estão preenchidos!");
  cy.get(selectorsList.COUNTER).should("be.visible");
  cy.log("Validado que o contador está zerado e não há nada a preencher!");
  cy.get(selectorsList.BTN_NEXT_INSURANCE).click();
  cy.log("Dados do seguro preenchidos com sucesso!");
});
