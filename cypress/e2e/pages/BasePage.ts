class BasePage {
  visit() {
    cy.visit("https://careers.quadient.com/");
  }

  verifyText(element: Cypress.Chainable<JQuery>, expectedText: string) {
    element
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const cleanedText = text
          .replace(/\u00A0/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        expect(cleanedText).to.eq(expectedText);
      });
  }
}

export default BasePage;
