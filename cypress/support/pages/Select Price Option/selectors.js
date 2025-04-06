const PRICE_OPTION = [
  "#selectsilver",
  "#selectgold",
  "#selectplatinum",
  "#selectultimate",
];

export const selectorsList = {
  PRICE_OPTION,
  INPUT_PRICE: Math.floor(Math.random() * PRICE_OPTION.length),
  BTN_NEXT_PRICE: "#nextsendquote",
  ABA_PRICE_OPTION: ".idealsteps-step-active, a[name= 'Select Price Option']",
  MANDATORY_FORM: ".invalid",
  PREVIOUS_MSG: "#xLoaderPrice",
  COUNTER: "span.counter.zero",
};
