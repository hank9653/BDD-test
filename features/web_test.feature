Feature: Web Test
  Everybody wants to Google search

  Scenario: Finding some cheese
   Given I am on the Google search page
   When I search for "Cheese!"
   Then close browser