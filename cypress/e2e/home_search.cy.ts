import SearchPage from "././pages/SearchPage";

describe("Quadient Careers - Search", () => {
  beforeEach(() => {
    SearchPage.visit();
  });

  it("Should allow typing in the search input inside Categories dropdown", () => {
    SearchPage.typeInCategoriesSearch("test");
  });

  it("Should allow typing in the search input inside Countries dropdown", () => {
    SearchPage.typeInCountriesSearch("test");
  });
});
