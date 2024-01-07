import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


export class HomePage extends BasePage {
    private learningElement = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-218225"]//a[@href="#"]');
    private contactUsButton = By.xpath('//ul[@id="menu-footer-main-menu"]//li[@id="menu-item-218100"]//a[@href="https://ultimateqa.com/contact/"]');
    private blogButton = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-218226"]//a[@href="https://ultimateqa.com/blog/"]');
    private javaAcademyButton = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-217931"]//a[@href="https://ultimateqa.ck.page/academy-coming-soon"]');
    private automationExercisesButton = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-218225"]//ul[@class="sub-menu"]//li[@id="menu-item-217937"]//a[@href="https://ultimateqa.com/automation/"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async hoverLearningElement() {
        await this.hoverElement(this.learningElement);
    }

    async clickOnJavaAcademy() {
        await this.findElementAndClick(this.javaAcademyButton);
    }

    async clickOnBlogButton() {
        await this.findElementAndClick(this.blogButton);
    }

    async scrollAndClickOnContact() {
        this.scrollToElement(this.contactUsButton).click();
    }





}