

/// <reference types="cypress" />

import { element } from "protractor";

describe('{your-app}', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('user');
    Cypress.Cookies.preserveOnce('cart')
  });
  
  it('loads front page', () => {
    cy.visit('/')
    cy.contains('Games')
    cy.get("#account-button").click();
  });

  it('logs in', () => {
    cy.get("#emailInput").type("test@gmail.com");
    cy.get("#passwordInput").type("password");
    cy.get("#loginBtn").click();
  });

  it('edit profile', () => {
    cy.get("#account-button").click();
    cy.get("#address").type("street");
    cy.get("#city").type("Rotterdam");
    cy.get("#submit").click();
    cy.get("#homeBtn").click();
  });
  it('edit profile 2nd', () => {
    cy.get("#account-button").click();
    cy.get("#address").type("SomeStreet");
    cy.get("#city").type("Amsterdam");
    cy.get("#submit").click();

  });
  it('add games to cart', () => {
    cy.get("#homeBtn").click();
    cy.get("#game0").click();
    cy.get("#game3").click();
    cy.get("#game4").click();
  });
  /*
  it('purchase games', () => {
    cy.get("#cart-button").click();
    cy.get("#purchaseBtn").click();

  });
  */
  it('add games to wishlist', () => {
    cy.get("#homeBtn").click();
    cy.get("#fav1").click();
    cy.get("#fav2").click();
    cy.get("#favorite-button").click();
  });
  it('should remove game from wishlist', () => {
    cy.get("#remove2").click();
    cy.get("#remove3").click();
  });
  it('should go to chat', () => {
    cy.get("#chat-button").click();
    cy.get("#message").type("Hello world!");
    cy.get("#name").type("John");
    cy.get("#send-btn").click();

    cy.get("#message").clear();
    cy.get("#name").clear();

    cy.get("#message").type("Hi, how are you?");
    cy.get("#name").type("Jane")
    cy.get("#send-btn").click();
  });
  it('logout', () => {
    cy.get("#account-button").click();
    cy.get("#logout").click();
  });
});
