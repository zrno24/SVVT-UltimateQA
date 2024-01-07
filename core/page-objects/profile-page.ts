import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ProfilePage extends BasePage {

    private firstNameInput = By.xpath('//input[@id="user[first_name]"]');
    private lastNameInput = By.xpath('//input[@id="user[last_name]"]');
    private submitButton = By.xpath('//input[@type="submit"]');
    private successMessageHeader = By.xpath('//p[@class="message-text"]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickOnFirstNameInput() {
        await this.findElementAndClick(this.firstNameInput);
    }

    async clickOnLastName() {
        await this.findElementAndClick(this.lastNameInput);
    }
    
    async newFirstNameInput() {
        await this.fillInputField(this.firstNameInput, testData.account.new_first_name);
    }

    async newLastNameInput() {
        await this.fillInputField(this.lastNameInput, testData.account.new_last_name);
    }

    async clickOnSubmit() {
        await this.findElementAndClick(this.submitButton);
    }

    async assertSuccessfulChange() {
        await this.checkMatchingElements()
    }

}