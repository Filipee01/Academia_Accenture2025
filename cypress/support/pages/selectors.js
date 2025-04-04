import { faker } from "@faker-js/faker";

export const ID_PAGE = "#selectedinsurance";
export const MAKE = "#make";
export const ENGINE = "#engineperformance";
export const DATE = "#dateofmanufacture";
export const NUMBER_OF_SEATS = "#numberofseats";
export const FUEL_TYPE = "#fuel";
export const LIST_PRICE = "#listprice";
export const LICENCE_PLATE = "#licenseplatenumber";
export const ANNUAL_MILEAGE = "#annualmileage";
export const BTN_NEXT = "#nextenterinsurantdata";

export const FIRST_NAME = "#firstname";
export const LAST_NAME = "#lastname";

export const DATE_OF_BIRTH = "#birthdate";
export const GENDER = Math.random() < 0.5 ? "#gendermale" : "#genderfemale";
export const STREET_ADDRESS = "#streetaddress";
export const COUNTRY = "#country";
export const ZIP_CODE = "#zipcode";

export const getValidZipCode = () => {
  let zip;
  do {
    zip = faker.location.zipCode().replace(/\D/g, ""); // Remove caracteres não numéricos
  } while (zip.length < 4 || zip.length > 8); // Garante que tenha entre 4 e 8 dígitos
  return zip;
};

export const CITY = "#city";
export const OCCUPATION = "#occupation";
export const HOBBIES_CATEGORY = [
  " Speeding",
  " Bungee Jumping",
  " Cliff Diving",
  " Skydiving",
  " Other",
];
export const RANDOM_CATEGORY = () => {
  const index = Math.floor(Math.random() * HOBBIES_CATEGORY.length);
  return HOBBIES_CATEGORY[index];
};

export const HOBBIES_RANDOM = RANDOM_CATEGORY();

export const WEBSITE = "#website";
export const PICTURE = "#picturecontainer";
export const BTN_NEXT_INSURANCE = "#nextenterproductdata";

export const START_DATE = "#startdate";
export const INSURACE_SUM = "#insurancesum";
export const MERIT_RATING = "#meritrating";
export const DAMAGE_INSURANCE = "#damageinsurance";
export const OPTIONAL_PRODUCTS =
  Math.random() < 0.5 ? "#EuroProtection" : "#LegalDefenseInsurance";
export const COURTESY_CAR = "#courtesycar";
export const BTN_NEXT_PRODUCT = "#nextselectpriceoption";

export const PRICE_OPTION = [
  "#selectsilver",
  "#selectgold",
  "#selectplatinum",
  "#selectultimate",
];
export const INPUT_PRICE = Math.floor(Math.random() * PRICE_OPTION.length);
export const BTN_NEXT_PRICE = "#nextsendquote";

export const INPUT_EMAIL = "#email";
export const INPUT_PHONE = "#phone";
export const INPUT_USERNAME = "#username";
export const INPUT_PASSWORD = "#password";
export const INPUT_CONFIRM_PASSWORD = "#confirmpassword";
export const INPUT_COMMENTS = "#Comments";
export const BTN_SEND = "#sendemail";
