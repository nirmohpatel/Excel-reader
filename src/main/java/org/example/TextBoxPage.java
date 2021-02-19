package org.example;

import org.openqa.selenium.By;
import org.testng.asserts.SoftAssert;

public class TextBoxPage extends Util
{
    SoftAssert softAssert = new SoftAssert();
    LoadProperty loadProperty = new LoadProperty();

    private String expectedUrl = "https://demoqa.com/";
    private String expectedElementPageText = "Elements";
    private String expectedTextBoxPageText = "Text Box";
    private String expectedFullNameText = "Name:Sam";



    private By _elementsButton = By.xpath("//div[@class=\"category-cards\"]/div[1]/div");
    private By _formsButton = By.xpath("//div[@class=\"category-cards\"]/div[2]/div");
    private By _actualMainHeaderText = By.xpath("//div[@class=\"main-header\"]");
    private By _textBoxButton = By.xpath("//div[@class=\"accordion\"]/div[1]/div[1]/ul[1]/li[1]");
    private By _fullName = By.xpath("//input[@id=\"userName\"]");
    private By _email = By.xpath("//input[@id=\"userEmail\"]");
    private By _currentAddress = By.xpath("//textarea[@id=\"currentAddress\"]");
    private By _permanentAddress = By.xpath("//textarea[@id=\"permanentAddress\"]");
    private By _submitButton = By.xpath("//button[@id=\"submit\"]");
    //private By _actualFullName = By.linkText("sam");
    private By _actualFullName = By.xpath("//div[@class=\"border col-md-12 col-sm-12\"]/p[1]");
    //private By _checkBoxButton = By.xpath("//div[@class=\"accordion\"]/div[1]/div[1]/ul[1]/li[2]");

    public void toVerifyThatUserIsOnHomePage()
    {
        String actualUrl = driver.getCurrentUrl();
        softAssert.assertEquals((actualUrl), expectedUrl, "User is on Home Page");
        softAssert.assertAll();
    }
    public void clickOnElementsButton()
    {
        clickOnElement(_elementsButton);
    }

    public void toVerifyThatUserIsOnElementsPage()
    {
        softAssert.assertEquals(getTextFromElement(_actualMainHeaderText), expectedElementPageText, "User is on ElementsPage");
        softAssert.assertAll();
    }
    public void clickOnTextBoxButton()
    {
        clickOnElement(_textBoxButton);
    }

    public void toVerifyUserIsOnTextBoxPage()
    {
        softAssert.assertEquals(getTextFromElement(_actualMainHeaderText),expectedTextBoxPageText,"User is on Text Box Page");
        softAssert.assertAll();
    }
    public void userEnterFullName (String FullName)
    {
        //typeText(_fullName,loadProperty.getProperty("FullName"));
        typeText(_fullName,FullName);
    }

    public void userEnterEmail (String Email)
    {
        //typeText(_email,loadProperty.getProperty("Email"));
        typeText(_email,Email);
    }

    public void userEnterCurrentAddress (String CurrentAddress)
    {
        //typeText(_currentAddress,loadProperty.getProperty("CurrentAddress"));
        typeText(_currentAddress,CurrentAddress);
    }
    public void userEnterPermanentAddress(String permanentAddress)
    {
        //typeText(_permanentAddress,loadProperty.getProperty("PermanentAddress"));
        typeText(_permanentAddress,permanentAddress);
    }

    public void userClickOnSubmitButton()
    {
        javaScriptClickOnElement(_submitButton);
        //waitUntilElementIsClickAble(_submitButton,60);
        //clickOnElement(_submitButton);
    }

    public void toVerifyThatUserAbleToSeeAllPersonalDataAddSuccessfully()
    {
        softAssert.assertEquals(getTextFromElement(_actualFullName),expectedFullNameText, "User should be able to add personal data successfully");
        softAssert.assertAll();
    }


}
