describe('Submit the form with validation check', () => {
  it('should show validation error if there are errors, and hide the form if there are no errors and show  the user name', () => {
    // Visit your Vue application where the button component is rendered
    cy.visit('http://localhost:5173')

    // submit form button
    cy.get('.submit-btn').click()

    // Assert the form validation visible in screen
    cy.get('.ant-form-item-explain-error').should('be.visible') 
    
    // Fill in the form fields with valid values
    cy.get('.username-input').type('saeed alipanah')

    // Click the button again after filling the form fields
    cy.get('.submit-btn').click()
    
    // Assert that the form is submitted successfully
    cy.get('.username').should('be.visible')
  })
})