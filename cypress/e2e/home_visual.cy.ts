import CareersHomePage from "./pages/CareersHomePage";

describe("Quadient Careers - Home Page", () => {
  beforeEach(() => {
    CareersHomePage.visit();
  });

  it("Should verify header text", () => {
    CareersHomePage.verifyHeaderText();
  });

  it("Should verify banner prehead text", () => {
    CareersHomePage.verifyBannerPreheadText();
  });

  it("Should verify banner subhead text", () => {
    CareersHomePage.verifyBannerSubheadText();
  });
});
