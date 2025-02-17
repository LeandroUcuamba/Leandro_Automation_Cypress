/// <reference types="cypress" />

require('cypress-xpath');

describe('Login', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  const nomeAleatorio = Math.random().toString(36).substring(2, 9);
  const passwordAleatoria = Math.random().toString(36).substring(7, 14);

  it('Sign-up for an account successfully', () => {

     cy.get('#signup').click();
     cy.get('#name-sign-up').type('Leandro Ucuamba');
     cy.get('#login-sign-up').type(`${nomeAleatorio}`);
     cy.get('#password-sign-up').type(`${passwordAleatoria}`);
     cy.get('#btn-submit-sign-up').click();

     cy.get('body > div.container > div > div > p:nth-child(2)')
        .should(
            "contain.text",
            "You are now registered and can add tasks you want to do in the distant future."
        )
  })
  it('Login test with wrong "user" in the credentials.', () => {

    cy.get('nav a').contains('Sign in').click();
    cy.get('#login-sign-in').type("wrong_user");
    cy.get('#password-sign-in').type("testArrop_");
    cy.get('#btn-submit-sign-in').click();
    cy.get('#toast-container').should('be.visible');
    cy.get('#toast-container').should('contain.text', 'Maybe you brain dropped the password or login in some place!');
  })
  it('Login test with wrong "password" in the credentials.', () => {
    
    cy.get('nav a').contains('Sign in').click();
    cy.get('#login-sign-in').type("User_");
    cy.get('#password-sign-in').type("wrong_password");
    cy.get('#btn-submit-sign-in').click();
    cy.get('#toast-container').should('be.visible');
    cy.get('#toast-container').should('contain.text', 'Maybe you brain dropped the password or login in some place!');
  })
})