
/// <reference types="cypress" />
describe('Login', function () {
    it('Ngambil Filter', function () {
        cy.visit(Cypress.env("base_url"))
        cy.get("#userid").type(Cypress.env("username"))
        cy.get("#password").type(Cypress.env("password"))
        cy.contains("Masuk").click()
        cy.visit(Cypress.env("base_url") + "spmb/ms_jenispilihan/131")
        cy.get('#insert-row-ms > :nth-child(5) > .btn').click()
        cy.get('#i_idjenispilihan').select("IPC")
        cy.get('#insert-row-ms > :nth-child(5) > .btn').click()
        cy.get('#i_idjenispilihan').select("IPS")
        cy.get('#insert-row-ms > :nth-child(5) > .btn').click()
    });
});