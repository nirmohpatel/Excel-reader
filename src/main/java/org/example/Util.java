package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class Util extends BasePage
{
    public static void clickOnElement(By by) {
        driver.findElement(by).click();
    }

    public String getTextFromElement(By by) {
        return driver.findElement(by).getText();
    }

    public static void typeText(By by, String text)
    {
        driver.findElement(by).sendKeys(text);
    }

    public static void javaScriptClickOnElement(By by) {
        WebElement element = driver.findElement(by);
        JavascriptExecutor javascript = (JavascriptExecutor) driver;
        javascript.executeScript("arguments[0].click();", element);
    }
}
