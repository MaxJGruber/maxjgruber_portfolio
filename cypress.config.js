const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4ggiv8",
  blockHosts: ["www.google-analytics.com", "www.googletagmanager.com"],
  video: false,
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:3000/",
    defaultCommandTimeout: 5000,
    testIsolation: false,
  },
});
