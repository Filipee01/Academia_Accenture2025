const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://sampleapp.tricentis.com/101/",

    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
    },
  },
});
