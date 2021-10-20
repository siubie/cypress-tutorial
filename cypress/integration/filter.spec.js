/// <reference types="cypress" />
describe('Login', function () {
    it('Ngambil Filter', function () {
        cy.visit(Cypress.env("base_url"))
        cy.get("#userid").type(Cypress.env("username"))
        cy.get("#password").type(Cypress.env("password"))
        cy.contains("Masuk").click()
        cy.visit(Cypress.env("base_url") + "spmb/list_periode")
        cy.get('#collapseidperiode > .box-body > .slimScrollDiv > .tree > ul').contains("2021 Genap").click()
        cy.wait(5000)
        cy.get('[data-testid=collapseidjalurpendaftaran]').should("be.visible").click()
        cy.get('#collapseidjalurpendaftaran > .box-body > .slimScrollDiv > .tree > ul').contains("Mandiri S1").click()
        cy.wait(5000)
        cy.get('[data-testid=collapseidgelombang]').should("be.visible").click()
        cy.get('#collapseidgelombang > .box-body > .slimScrollDiv > .tree > ul').contains("Gelombang 1").click()
        cy.wait(5000)
        cy.get('[data-testid=collapseidsistemkuliah]').should("be.visible").click()
        cy.get('#collapseidsistemkuliah > .box-body > .slimScrollDiv > .tree > ul').contains("Reguler A").click()
        cy.wait(5000)
        cy.get('[data-testid=collapsestatus]').should("be.visible").click()
        cy.get('#collapsestatus > .box-body > .slimScrollDiv > .tree > ul').contains("Aktif").click()
        cy.get("#form_list > div > table").getTable().should(tableData => {
            cy.log(tableData)
        })
    });
});