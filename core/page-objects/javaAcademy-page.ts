import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class JavaAcademyPage extends BasePage {
    private earlyAccessButton = By.className("formkit-signup");
    private firstNameInput = By.xpath("//input[@name='fields[first_name]']");
    private lastNameInput = By.xpath('//input[@name="fields[last_name]"]');
    private emailInput = By.xpath('//input[@placeholder="Email Address"]');
    private phoneNumberInput = By.xpath('//input[@placeholder="Phone Number"]');
    private earlyAccessButton2 = By.xpath('//button[@class="formkit-submit"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

async ClickOnFirstEarlyAccessButton() {
    await this.findElementAndClick(this.earlyAccessButton);
}
async InputFirstName(){
    await this.fillInputField(this.firstNameInput, testData.account.first_name);
}

async clickOnFirstNameInput() {
    await this.findElementAndClick(this.firstNameInput);
}

async clickOnLastNameInput() {
    await this.findElementAndClick(this.lastNameInput);
}

async InputLastName(){
    await this.fillInputField(this.lastNameInput,testData.account.last_name);
}

async clickOnEmailInput() {
    await this.findElementAndClick(this.emailInput);
}

async InputEmail(){
    await this.fillInputField(this.emailInput,testData.account.email);
}

async clickOnPhoneInput() {
    await this.findElementAndClick(this.phoneNumberInput);
}

async InputPhoneNumber(){
    await this.fillInputField(this.phoneNumberInput,testData.account.phone_number);
}
async ClickOnSecondEarlyAccessButton(){
    await this.findElementAndClick(this.earlyAccessButton2)
}
}