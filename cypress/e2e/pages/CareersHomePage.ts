import BasePage from "./BasePage";

class CareersHomePage extends BasePage {
  getHeader() {
    return cy.get("h1.heading");
  }

  getBannerPrehead() {
    return cy.get("div.banner-body span.pre-heading");
  }

  getBannerSubhead() {
    return cy.get("p[paraid='1841193959']");
  }

  verifyHeaderText() {
    this.verifyText(
      this.getHeader(),
      "Careers at Quadient Make a Connection – Join our Talent Community!",
    );
  }

  verifyBannerPreheadText() {
    this.verifyText(
      this.getBannerPrehead(),
      "Join Quadient and Build Connections that Matter",
    );
  }

  verifyBannerSubheadText() {
    this.verifyText(
      this.getBannerSubhead(),
      "Explore opportunities worldwide at the forefront of business technology. Discover where your talents will fit into our global team.",
    );
  }
}

export default new CareersHomePage();
