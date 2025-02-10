import BasePage from "./BasePage";

class NavigationPage extends BasePage {
  getSearchButton() {
    return cy.get("a.orange.fill.button-default");
  }

  verifySearchButtonHasTargetBlank() {
    this.getSearchButton().should("have.attr", "target", "_blank");
  }

  removeTargetBlank() {
    this.getSearchButton().invoke("removeAttr", "target");
  }

  clickSearchButton() {
    this.getSearchButton().click();
  }

  interceptSearchRedirect() {
    cy.intercept("**/en/jobs*").as("redirectToJobs");
  }

  clickSearchButtonAndWaitForRedirect() {
    this.interceptSearchRedirect();
    this.removeTargetBlank();
    this.clickSearchButton();
    cy.wait("@redirectToJobs");
    cy.url().should("include", "/en/jobs");
  }
}

export default new NavigationPage();
