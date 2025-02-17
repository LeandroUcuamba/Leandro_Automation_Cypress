const { defineConfig } = require("cypress");
const baseConfig = require('./cypress.config');

const e2e = {
    baseUrl: 'http://www.qa.leandroucuamba.com.br/taskit/',
    env: {
        username: 'QA_Leandro',
        password: 'QA_Secret'
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
});