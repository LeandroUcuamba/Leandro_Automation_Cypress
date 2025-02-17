const { defineConfig } = require("cypress");
const baseConfig = require('./cypress.config');

const e2e = {
    baseUrl: 'http://www.dev.leandroucuamba.com.br/taskit/',
    env: {
        username: 'DEV_Leandro',
        password: 'DEV_Secret'
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
});