Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

  Scenario: easy maths
    Given I go to duck duck go
    When  I search for WebdriverIO
    Then  I should see the search results

Scenario: Search for Google
    Given I go to google
    When  I search for googlemaps
    Then  I should see the search results on google