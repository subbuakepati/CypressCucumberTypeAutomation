@api @regression
Feature: API Testing for ReqestResponse Api

Scenario: Create a new user
    Given I send a POST request to "/api/users" with the following data
      | name  | job  |
      | John   | Developer |
    Then the response status should be 201
    And the response body should include the following
      | name  | job  |
      | John  | Developer |

  Scenario: Update an existing user
    Given I send a PUT request to "/api/users/2" with the following data
      | name  | job  |
      | John   | Manager |
    Then the response status should be 200
    And the response body should include the following
      | name  | job  |
      | John  | Manager |

