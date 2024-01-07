import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class FormPage extends BasePage {

    private nameInput = By.id('et_pb_contact_name_0');
    private messageInput = By.className('et_pb_contact_field et_pb_contact_field_1 et_pb_contact_field_last');
    private submitButton = By.xpath('/html/body/div[1]/div/div/div/article/div/div[1]/div/div/div[2]/div[1]/div/div[2]/form/div/button'); 
    private submitSuccess = By.xpath('//div[@id="et_pb_contact_form_0"]//div[@class="et-pb-contact-message"]');
    //Full Xpath for the submit button had to be used as both submit buttons on the page have the same manually written Xpath with no other way to differentiate them


    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickOnName() {
        await this.findElementAndClick(this.nameInput);
    }

    async inputName() {
        await this.fillInputField(this.nameInput, testData.account.name);
    }

    async clickOnMessage() {
        await this.findElementAndClick(this.messageInput);
    }

    async inputMessage() {
        await this.fillInputField(this.messageInput, testData.verification_message.form_message);
    }

    async clickOnSubmit() {
        await this.findElementAndClick(this.submitButton);
    }

    async assertSuccessfulSubmit() {
        await this.checkMatchingElements(this.submitSuccess, "Thanks for contacting us");
    }


}
