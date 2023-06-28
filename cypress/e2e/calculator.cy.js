describe("Calculator", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it('should have working number buttons', () => {
        cy.get('#number2').click();
        cy.get('.display').should('contain', '2')
    })
    it('should update display on button click', () => {
        cy.get('#number2').click();
        cy.get('#number5').click();
        cy.get('#number9').click();
        cy.get('.display').should('contain', '259')
    })
    it('should update display on arethmatic calculations', () => {
        cy.get('#number2').click();
        cy.get('#operator-add').click();
        cy.get('#number5').click();
        cy.get('#operator-add').click();
        cy.get('.display').should('contain', '7')
    })
    it('should chain multiple operations', () => {
        cy.get('#number2').click();
        cy.get('#operator-add').click();
        cy.get('#number5').click();
        cy.get('#operator-add').click();
        cy.get('#number5').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '12')
    })
    it('should handle positive numbers correctly', () => {
        cy.get('#number2').click();
        cy.get('#number2').click();
        cy.get('#operator-multiply').click();
        cy.get('#number2').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '44')
    })
    it('should handle negative numbers correctly', () => {
        cy.get('#number2').click();
        cy.get('#operator-subtract').click();
        cy.get('#number8').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '-6')
    })
    it('should handle decimal numbers correctly', () => {
        cy.get('#number5').click();
        cy.get('#operator-divide').click();
        cy.get('#number2').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '2.5')
    })
    it('should handle very large numbers correctly', () => {
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#operator-add').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#number9').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', '19999999998')
    })
    it('should return an error on division by zero', () => {
        cy.get('#number5').click();
        cy.get('#operator-divide').click();
        cy.get('#number0').click();
        cy.get('#operator-equals').click();
        cy.get('.display').should('contain', 'Error: division by zero')
    })
})