import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class AutomationPage extends BasePage {

    private formFillPageButton = By.xpath('//a[@href="https://ultimateqa.com/filling-out-forms/"]');
    private bigPageWithManyElementsButton = By.xpath('//a[@href="../complicated-page"]');
    private loginPageButton = By.xpath('//a[@href="http://courses.ultimateqa.com/users/sign_in"]');
    private simpleElementInteractionPage = By.xpath('//a[@href="../simple-html-elements-for-automation/"]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async goToFormFillPage() {
        await this.findElementAndClick(this.formFillPageButton);
    }

    async goToLoginPage() {
        await this.findElementAndClick(this.loginPageButton);
    }

    async goToComplicatedElementPage() {
        await this.findElementAndClick(this.bigPageWithManyElementsButton);
    }

    async goToSimpleElementPage() {
        await this.findElementAndClick(this.simpleElementInteractionPage);
    }


}