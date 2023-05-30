// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('http://localhost:5174')
    // cy.contains('h1', 'You did it!')
  })
})
