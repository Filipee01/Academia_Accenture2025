// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "./pages/home.page";
import "./pages/vehicleDataForm.page";
import "./pages/insuranceDataForm.page";
import "./pages/productDataForm.page";
import "./pages/sendQuoteForm.page";
import "./pages/priceOptionForm.page";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Para ignorar os erros não tratados da aplicação
});
