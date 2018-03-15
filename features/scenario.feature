Feature: Sign-up feature
  As An anonymous user
  I want to be member of the application
  So That I can register with sign-up form

  Scenario: Invalid sign up on figure1
    Given I go to figure1 register page
    When I Enter Invalid credentials on signup page fields
    Then I should see Unsuccessful result

 Scenario: Valid sign up on figure1
    Given I am at figure1 register page
    When I Enter valid credentials at all fields 
    Then I should see Successful result
    