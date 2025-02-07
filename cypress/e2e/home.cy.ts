describe('Home Page Tests', () => {
  it('Открывает главную страницу и проверяет заголовок', () => {
    cy.visit('https://careers.quadient.com/');
    cy.title().should('include', 'Quadient Careers');
  });
});
