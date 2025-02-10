import NavigationPage from "././pages/NavigationPage";

describe("Quadient Careers - Navigation", () => {
  beforeEach(() => {
    NavigationPage.visit();
  });

  it("Should verify Search button has target='_blank'", () => {
    NavigationPage.verifySearchButtonHasTargetBlank();
  });

  it("Should redirect to jobs page when clicking the search button", () => {
    NavigationPage.clickSearchButtonAndWaitForRedirect();
  });
});
