Feature: Web Automation Test on bing
  Background: Open bing page
    Given I opened "http://bing.com" page
    Then Assert page title, header and search bar

  Scenario: Get first 50 "Trending on bing" results
    When Return titles, links URLs, image URLs of the Trending On Bing section

  Scenario: Search for Google Documents
    When I search for "Google Documents"
    Then Return how many results were found
    When I customize search date to be today
    Then Return search results on the first page
    When I go to the "News" tab
    Then Save the first result
    When I go to the "All" tab
    Then Return search results on the first page
    When I go to the "News" tab
    Then Assert the first result