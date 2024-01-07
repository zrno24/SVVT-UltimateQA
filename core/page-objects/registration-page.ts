import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from "./home-page";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegistrationPage extends BasePage{
private createNewAccLink=By.xpath('//a[@href="/users/sign_up"]');
private firstNameInput=By.xpath('//input[@id="user[first_name]"]');
private lastNameInput=By.xpath('//input[@id="user[last_name]"]');
private emailInput=By.xpath('//input[@id="user[email]"]');
private passwordInput=By.xpath('//input[@id="user[password]"]');
private tickPrivacyPolicy=By.xpath('//input[@id="user[terms]"]');
private signUpButton=By.className('button button-primary g-recaptcha');


async ClickOnNewAccLink(){
    await this.findElementAndClick(this.createNewAccLink);
}
async InputFirstName(){
    await this.fillInputField(this.firstNameInput, testData.account.first_name)
}
async InputLastName(){
    await this.fillInputField(this.lastNameInput,testData.account.last_name);
}
async InputEmail(){
    await this.fillInputField(this.emailInput,testData.account.email);
}
async InputPassword(){
    await this.fillInputField(this.passwordInput,testData.account.password);
}
async TickPrivacyPolicy(){
    await this.findElementAndClick(this.tickPrivacyPolicy);
}
async ClickOnSignUpButton(){
    await this.findElementAndClick(this.signUpButton);
}
}