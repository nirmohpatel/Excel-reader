package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs
{   TextBoxPage textBoxPage = new TextBoxPage();

    @Given("^User is on Home Page$")
    public void user_is_on_Home_Page()
    {
       // System.out.println("user is on home page");
        textBoxPage.toVerifyThatUserIsOnHomePage();

    }

    @When("^User click on element page$")
    public void user_click_on_element_page()
    {
        //System.out.println("User click on element Button");
        textBoxPage.clickOnElementsButton();
    }

    @Then("^User successfully navigate to element page$")
    public void user_successfully_navigate_to_element_page()
    {
        //System.out.println("User is successfully navigate to element page");
        textBoxPage.toVerifyThatUserIsOnElementsPage();
    }

    @When("^User click on TextBox page$")
    public void user_click_on_TextBox_page()
    {
        //System.out.println("user click on Text box page button");
        textBoxPage.clickOnTextBoxButton();
    }

    @Then("^User able to navigate to TextBox page successfully and see address verification page$")
    public void user_able_to_navigate_to_TextBox_page_successfully_and_see_address_verification_page()
    {
        //System.out.println("user able to navigate to text box page");
        textBoxPage.toVerifyUserIsOnTextBoxPage();
    }

    /*@When("^User enter FullName$")
    public void user_enter_FullName()
    {
        //System.out.println("User enter full Name");
        textBoxPage.userEnterFullName();
    }

    @When("^User enter Email$")
    public void user_enter_Email()
    {
        //System.out.println("User enter Email");
        textBoxPage.userEnterEmail();
    }

    @When("^User enter Current Address$")
    public void user_enter_Current_Address()
    {
        //System.out.println("User enter current address");
        textBoxPage.userEnterCurrentAddress();
    }

    @When("^User  enter permanent Address$")
    public void user_enter_permanent_Address()
    {
        //System.out.println("User enter Permanent address");
        textBoxPage.userEnterPermanentAddress();
    }*/

    @When("^User enter \"([^\"]*)\" fullName$")
    public void user_enter_fullName(String FullName)
    {
        textBoxPage.userEnterFullName(FullName);
    }

    @When("^User enter \"([^\"]*)\" Email$")
    public void user_enter_Email(String Email)
    {
        textBoxPage.userEnterEmail(Email);
    }

    @When("^User enter \"([^\"]*)\" Current Address$")
    public void user_enter_Current_Address(String CurrentAddress)
    {
        textBoxPage.userEnterCurrentAddress(CurrentAddress);
    }

    @When("^User  enter \"([^\"]*)\" Permanent Address$")
    public void user_enter_Permanent_Address(String permanentAddress)
    {
        textBoxPage.userEnterPermanentAddress(permanentAddress);
    }

    @When("^User click on submit Button$")
    public void user_click_on_submit_Button()
    {
        //System.out.println("User click on Submit Button");
        textBoxPage.userClickOnSubmitButton();
    }

    @Then("^User able to see required data add successfully$")
    public void user_able_to_see_required_data_add_successfully()
    {
        //System.out.println("User able to add data successfully");
        textBoxPage.toVerifyThatUserAbleToSeeAllPersonalDataAddSuccessfully();
    }
}
