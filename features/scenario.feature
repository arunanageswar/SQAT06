Feature: Sign-up feature
  As An anonymous user
  I want to be member of the application
  So That I can register with sign-up form

  Scenario: Unsuccessful sign up on figure1
    Given I go to figure1 register page
    When I Enter Invalid Username
    Then I should see result username invalid  

 Scenario: Successful sign up on figure1
    Given I am at figure1 register page
    When I Enter Username, emailid, password, repeat password, select other fields
    