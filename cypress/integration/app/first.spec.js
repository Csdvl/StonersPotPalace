describe('The first one Boys !!!', () => {
  it('Visits the page', () => {
    cy.server();
    
    cy.visit('/');
    cy.get('[href="/auth"]').click();
  })
});