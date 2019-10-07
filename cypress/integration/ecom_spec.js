describe('Ecom test cases', function() { 
    it('Visit ecom', function() {
        cy.visit('http://localhost:4200/');
        cy.contains('Home').click();
        cy.contains('Link').click();
        cy.contains('Dropdown').click();
        cy.contains('Search').click();
    })
})