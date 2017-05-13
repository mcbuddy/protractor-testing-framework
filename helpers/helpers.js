// helpers/helpers.js
// Add any repetation functions so that these function can be call  and use as needed.

// adding this so this page object can be use in the helper functions
// var locators = require('../page_objects/locators.json')

module.exports = {
  // this function will help to clear the browser state for each test
  // add this using afterAll hooks on test/spec
  clearSession: function () {
    browser.manage().deleteAllCookies();
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  }
}
