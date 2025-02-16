/// <reference types="cypress" />

require('cypress-xpath');

describe('Login', () => {

  it('Sign-up for an account successfully', () => {
     // Arrange
     cy.visit('http://www.juliodelima.com.br/taskit/');

     const numeroAleatorio = Math.random().toString(36).substring(2, 9);

     // Act
     cy.get('#signup').click();
     cy.get('#name-sign-up').type('Leandro Ucuamba');
     cy.get('#login-sign-up').type(`User_${numeroAleatorio}`);
     cy.get('#password-sign-up').type('testArrop');
     cy.get('#btn-submit-sign-up').click();

     // Assert
     cy.get('body > div.container > div > div > p:nth-child(2)')
        .should(
            "contain.text",
            "You are now registered and can add tasks you want to do in the distant future."
        )

     cy.xpath('/html/body/nav/div/div/ul[1]/li[3]/a').click();
     cy.xpath('/html/body/nav/div/div/ul[1]/li/a').click();
     cy.get('#login-sign-in').type(`User_${numeroAleatorio}`);
     cy.get('#password-sign-in').type('testArrop');
     cy.get('#btn-submit-sign-in').click();
  })
})
