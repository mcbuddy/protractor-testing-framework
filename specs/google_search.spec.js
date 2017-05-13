
var helpers = require('../helpers/helpers.js')
var locators = require('../page_objects/locators.json')

describe('Google Search - Protractor', function() {
  var googlePage = locators.googlePage
  var searchBar = element(by.id(googlePage["searchBar-id"]));
  var searchButton = element(by.name(googlePage["searchButton-name"]));
  var resultList = element(by.id(googlePage["resultList-id"]));
  var firstResult = element(by.xpath(googlePage["firstResult-xpath"]));

  beforeAll(function() {
    browser.get(browser.baseUrl);
  });

  afterAll(function () {
    sessions.clearSession();
  });

  it('should able to search - Protractor', function() {
    searchBar.sendKeys('Protractor');
    searchButton.click();
  });

  it('should have all result list', function() {
    expect(resultList.isPresent()).toBe(true);
  });

  it('should have Protractor-Test as first result', function() {
    expect(firstResult.isPresent()).toBe(true);
    expect(firstResult.getText()).toEqual('Protractor - end-to-end testing for AngularJS')
  });

});
