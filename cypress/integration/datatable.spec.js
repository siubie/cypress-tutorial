/// <reference types="cypress" />
describe('Login', function () {
    it('Ngambil Table', function () {
        cy.visit(Cypress.env("base_url"))
        cy.get("#userid").type(Cypress.env("username"))
        cy.get("#password").type(Cypress.env("password"))
        cy.contains("Masuk").click()
        cy.visit(Cypress.env("base_url") + "spmb/list_periode")
        cy.get("#form_list > div > table").getTable().should(tableData => {
            //hasil log ini di klik kanan copy simpan ke fixtures buat di assert 
            cy.log(tableData)
        })
    });
});