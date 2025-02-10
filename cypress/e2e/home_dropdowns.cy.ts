import DropdownPage from "././pages/DropdownPage";

describe("Quadient Careers - Dropdowns", () => {
  beforeEach(() => {
    DropdownPage.visit();
  });

  it("Should open and verify Categories dropdown", () => {
    DropdownPage.verifyCategoriesDropdownIsVisible();
  });

  it("Should open and verify Countries dropdown", () => {
    DropdownPage.verifyCountriesDropdownIsVisible();
  });
});
