@TextBoxPage @Test @Test2
Feature: User add personal data successfully

  #Scenario: User should be able to enter personal data successfully
   # Given User is on Home Page
    #When User click on element page
    #Then User successfully navigate to element page
    #When User click on TextBox page
    #Then User able to navigate to TextBox page successfully and see address verification page
   # When User enter "<FullName>" fullName
    #And User enter "<Email>" Email
   # And User enter "<CurrentAddress>" Current Address
   # And User  enter "<permanentAddress>" Permanent Address
    #And User click on submit Button
   # Then User able to see required data add successfully


  Scenario Outline: User should be able to enter personal data successfully
    Given User is on Home Page
    When User click on element page
    Then User successfully navigate to element page
    When User click on TextBox page
    Then User able to navigate to TextBox page successfully and see address verification page
    When User enter "<FullName>" fullName
    And User enter "<Email>" Email
    And User enter "<CurrentAddress>" Current Address
    And User  enter "<permanentAddress>" Permanent Address
    And User click on submit Button
    Then User able to see required data add successfully

    Examples:
    |FullName|Email|CurrentAddress|permanentAddress|
    |Sam     |test2@gmail.com|123, The mall, Watford, WD19 7EB|456, Harrow Road, Watford, WD19 5AB|
    |Aam     |test3@gmail.com|124, The mall, Watford, WD19 7EB|457, Harrow Road, Watford, WD19 5AB|