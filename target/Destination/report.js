$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/DemoExcelReader.feature");
formatter.feature({
  "line": 2,
  "name": "User add personal data successfully",
  "description": "",
  "id": "user-add-personal-data-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TextBoxPage"
    },
    {
      "line": 1,
      "name": "@Test"
    },
    {
      "line": 1,
      "name": "@Test2"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Scenario: User should be able to enter personal data successfully"
    },
    {
      "line": 5,
      "value": "# Given User is on Home Page"
    },
    {
      "line": 6,
      "value": "#When User click on element page"
    },
    {
      "line": 7,
      "value": "#Then User successfully navigate to element page"
    },
    {
      "line": 8,
      "value": "#When User click on TextBox page"
    },
    {
      "line": 9,
      "value": "#Then User able to navigate to TextBox page successfully and see address verification page"
    },
    {
      "line": 10,
      "value": "# When User enter \"\u003cFullName\u003e\" fullName"
    },
    {
      "line": 11,
      "value": "#And User enter \"\u003cEmail\u003e\" Email"
    },
    {
      "line": 12,
      "value": "# And User enter \"\u003cCurrentAddress\u003e\" Current Address"
    },
    {
      "line": 13,
      "value": "# And User  enter \"\u003cpermanentAddress\u003e\" Permanent Address"
    },
    {
      "line": 14,
      "value": "#And User click on submit Button"
    },
    {
      "line": 15,
      "value": "# Then User able to see required data add successfully"
    }
  ],
  "line": 18,
  "name": "User should be able to enter personal data successfully",
  "description": "",
  "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User click on element page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User successfully navigate to element page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on TextBox page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User able to navigate to TextBox page successfully and see address verification page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter \"\u003cFullName\u003e\" fullName",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter \"\u003cEmail\u003e\" Email",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter \"\u003cCurrentAddress\u003e\" Current Address",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User  enter \"\u003cpermanentAddress\u003e\" Permanent Address",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User able to see required data add successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;",
  "rows": [
    {
      "cells": [
        "FullName",
        "Email",
        "CurrentAddress",
        "permanentAddress"
      ],
      "line": 32,
      "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;1"
    },
    {
      "cells": [
        "Sam",
        "test2@gmail.com",
        "123, The mall, Watford, WD19 7EB",
        "456, Harrow Road, Watford, WD19 5AB"
      ],
      "line": 33,
      "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;2"
    },
    {
      "cells": [
        "Aam",
        "test3@gmail.com",
        "124, The mall, Watford, WD19 7EB",
        "457, Harrow Road, Watford, WD19 5AB"
      ],
      "line": 34,
      "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10825451300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User should be able to enter personal data successfully",
  "description": "",
  "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test2"
    },
    {
      "line": 1,
      "name": "@TextBoxPage"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User click on element page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User successfully navigate to element page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on TextBox page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User able to navigate to TextBox page successfully and see address verification page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter \"Sam\" fullName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter \"test2@gmail.com\" Email",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter \"123, The mall, Watford, WD19 7EB\" Current Address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User  enter \"456, Harrow Road, Watford, WD19 5AB\" Permanent Address",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User able to see required data add successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 289900300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_element_page()"
});
formatter.result({
  "duration": 284011800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_successfully_navigate_to_element_page()"
});
formatter.result({
  "duration": 126224400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_TextBox_page()"
});
formatter.result({
  "duration": 236189500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_navigate_to_TextBox_page_successfully_and_see_address_verification_page()"
});
formatter.result({
  "duration": 52167600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_fullName(String)"
});
formatter.result({
  "duration": 267480300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test2@gmail.com",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_Email(String)"
});
formatter.result({
  "duration": 187487800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123, The mall, Watford, WD19 7EB",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_Current_Address(String)"
});
formatter.result({
  "duration": 292931100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456, Harrow Road, Watford, WD19 5AB",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enter_Permanent_Address(String)"
});
formatter.result({
  "duration": 264421300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_submit_Button()"
});
formatter.result({
  "duration": 73051600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_see_required_data_add_successfully()"
});
formatter.result({
  "duration": 62259100,
  "status": "passed"
});
formatter.after({
  "duration": 29500,
  "status": "passed"
});
formatter.before({
  "duration": 5747783100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should be able to enter personal data successfully",
  "description": "",
  "id": "user-add-personal-data-successfully;user-should-be-able-to-enter-personal-data-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test2"
    },
    {
      "line": 1,
      "name": "@TextBoxPage"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User click on element page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User successfully navigate to element page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on TextBox page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User able to navigate to TextBox page successfully and see address verification page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter \"Aam\" fullName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter \"test3@gmail.com\" Email",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter \"124, The mall, Watford, WD19 7EB\" Current Address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User  enter \"457, Harrow Road, Watford, WD19 5AB\" Permanent Address",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User able to see required data add successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 27340300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_element_page()"
});
formatter.result({
  "duration": 376254200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_successfully_navigate_to_element_page()"
});
formatter.result({
  "duration": 153849200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_TextBox_page()"
});
formatter.result({
  "duration": 449131000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_navigate_to_TextBox_page_successfully_and_see_address_verification_page()"
});
formatter.result({
  "duration": 159976700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aam",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_fullName(String)"
});
formatter.result({
  "duration": 308884200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test3@gmail.com",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_Email(String)"
});
formatter.result({
  "duration": 281759000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "124, The mall, Watford, WD19 7EB",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter_Current_Address(String)"
});
formatter.result({
  "duration": 369966200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "457, Harrow Road, Watford, WD19 5AB",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enter_Permanent_Address(String)"
});
formatter.result({
  "duration": 416048700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_submit_Button()"
});
formatter.result({
  "duration": 80687900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_able_to_see_required_data_add_successfully()"
});
formatter.result({
  "duration": 83566200,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\tUser should be able to add personal data successfully expected [Name:Sam] but found [Name:Aam]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat org.example.TextBoxPage.toVerifyThatUserAbleToSeeAllPersonalDataAddSuccessfully(TextBoxPage.java:90)\r\n\tat org.example.MyStepDefs.user_able_to_see_required_data_add_successfully(MyStepDefs.java:109)\r\n\tat ✽.Then User able to see required data add successfully(src/test/resources/features/DemoExcelReader.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 27800,
  "status": "passed"
});
});