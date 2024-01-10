import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";
import { AutomationPage } from "./automationPractice-page";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HomePage extends BasePage {
    private learningElement = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-218225"]//a[@href="#"]');
    private contactUsButton = By.xpath('//ul[@id="menu-footer-main-menu"]//li[@id="menu-item-218100"]//a[@href="https://ultimateqa.com/contact/"]');
    private blogButton = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-218226"]//a[@href="https://ultimateqa.com/blog/"]');
    private javaAcademyButton = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-217931"]//a[@href="https://ultimateqa.ck.page/academy-coming-soon"]');
    private automationExercisesButton = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-218225"]//ul[@class="sub-menu"]//li[@id="menu-item-217937"]//a[@href="https://ultimateqa.com/automation/"]');
    private freeCoursesButton = By.xpath('//ul[@id="menu-main-menu"]//li[@id="menu-item-218225"]//ul[@class="sub-menu"]//li[@id="menu-item-217933"]//a[@href="https://courses.ultimateqa.com/collections"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async goToHomePage() {
        await this.driver.get(testData.url.home_page);
    }

    async clickOnAutomationButton() {
        await this.findElementAndClick(this.automationExercisesButton);
    }

    async hoverLearningElement() {
        await this.hoverElement(this.learningElement);
    }

    async clickOnFreeCourses() {
        await this.findElementAndClick(this.freeCoursesButton);
    }

    async clickOnJavaAcademy() {
        await this.findElementAndClick(this.javaAcademyButton);
    }

    async clickOnBlogButton() {
        await this.findElementAndClick(this.blogButton);
    }

    async scrollAndClickOnContactUsButton() {
        this.scrollToElement(this.contactUsButton);
        this.findElementAndClick(this.contactUsButton);

    }





}