import BasePage from "./BasePage";

class SearchPage extends BasePage {
  getDropdownButton(text: string) {
    return cy.get('button[data-dropdown-toggle="dropdown"]').contains(text);
  }

  getDropdownMenu() {
    return cy.get(".select-dropdown.block.long");
  }

  getSearchInput() {
    return this.getDropdownMenu().find("#search");
  }

  openDropdown(dropdownName: string) {
    this.getDropdownButton(dropdownName).click({ force: true });

    this.getDropdownMenu().should("exist").should("be.visible");
  }

  verifyDropdownIsVisible(dropdownName: string) {
    this.openDropdown(dropdownName);
  }

  typeInCategoriesSearch(text: string) {
    this.verifyDropdownIsVisible("Categories");

    this.getSearchInput()
      .should("exist")
      .should("be.visible")
      .type(text)
      .should("have.value", text);
  }

  typeInCountriesSearch(text: string) {
    this.verifyDropdownIsVisible("Countries");

    this.getSearchInput()
      .should("exist")
      .should("be.visible")
      .type(text)
      .should("have.value", text);
  }
}

export default new SearchPage();
