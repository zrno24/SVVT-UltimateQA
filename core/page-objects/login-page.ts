import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from "./home-page";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage{

private emailInput = By.xpath('//input[@id="user[email]"]');
private passwordInput = By.xpath('//input[@id="user[password]"]');
private signInButton = By.className('button button-primary g-recaptcha');



    async hoverLearningElement() {
        await this.hoverElement(this.learningElement);
    }

    async InputEmail(){
        await this.fillInputField(this.emailInput,testData.account.email);
    }
    async InputPassword(){
        await this.fillInputField(this.passwordInput,testData.account.password);
    }
    async ClickOnSignInButton(){
        await this.findElementAndClick(this.signInButton)
    }
    
}