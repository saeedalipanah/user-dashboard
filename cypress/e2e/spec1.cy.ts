describe('Button', () => {
  it('should emit a click event when clicked', () => {
    // Visit your Vue application where the button component is rendered
    cy.visit('http://localhost:5173')

    cy.get('#username-input').type('Saeed alipanah')

    // Find the button element using a CSS selector or other appropriate method
    cy.get('.sub-btn').click()

    // Assert that the click event was emitted
    cy.get('.username-form').should('have.been.submit')
  })
})