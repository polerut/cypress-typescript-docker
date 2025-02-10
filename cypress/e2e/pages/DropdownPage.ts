import BasePage from "./BasePage";

class DropdownPage extends BasePage {
  getDropdownButton(text: string) {
    return cy.get('button[data-dropdown-toggle="dropdown"]').contains(text);
  }

  verifyCategoriesDropdownText() {
    this.verifyText(this.getDropdownButton("Categories"), "Categories");
  }

  verifyCountriesDropdownText() {
    this.verifyText(this.getDropdownButton("Countries"), "Countries");
  }

  getDropdownMenu() {
    return cy.get(".select-dropdown.block.long");
  }

  openDropdown(dropdownName: string) {
    this.getDropdownButton(dropdownName).click();
  }

  verifyDropdownIsVisible(dropdownName: string) {
    this.openDropdown(dropdownName);
    this.getDropdownMenu().should("exist").should("be.visible");
  }

  verifyCategoriesDropdownIsVisible() {
    this.verifyDropdownIsVisible("Categories");
  }

  verifyCountriesDropdownIsVisible() {
    this.verifyDropdownIsVisible("Countries");
  }
}

export default new DropdownPage();
