import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ContactPage extends BasePage {

    private firstNameInputField = By.xpath('//input[@id="et_pb_contact_first_0"]');
    private lastNameInputField = By.xpath('//input[@id="et_pb_contact_last_0"]');
    private emailInputField = By.xpath('//input[@id="et_pb_contact_email_0"]');
    private messageInput = By.xpath('//textarea[@id="et_pb_contact_message_0"]');
    private messageSubmit = By.xpath('//button[@type="submit"]');
    private messageSent = By.xpath('//div[@class="et-pb-contact-message"]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickOnFirstName() {
        await this.findElementAndClick(this.firstNameInputField);
    }

    async fillOutFirstName() {
        await this.fillInputField(this.firstNameInputField, testData.account.first_name);
    }

    async clickOnLastName() {
        await this.findElementAndClick(this.lastNameInputField);
    }

    async fillOutLastName() {
        await this.fillInputField(this.lastNameInputField, testData.account.last_name);
    }

    async clickOnEmail() {
        await this.findElementAndClick(this.emailInputField);
    }

    async fillOutEmail() {
        await this.fillInputField(this.emailInputField, testData.account.email);
    }

    async clickOnMessage() {
        await this.findElementAndClick(this.messageInput);
    }

    async fillOutMessage() {
        await this.fillInputField(this.messageInput, testData.verification_message.form_message);
    }

    async clickOnSendMessage() {
        await this.findElementAndClick(this.messageSubmit);
    }

    async checkIfMessageSent() {
        await this.checkMatchingElements(this.messageSent, testData.verification_message.contact_page_message);
    }
}