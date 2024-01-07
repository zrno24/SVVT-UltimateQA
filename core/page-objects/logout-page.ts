import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from "./home-page";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LogoutPage extends BasePage{
    private dropDownMenu = By.className('fa fa-caret-down')
    private signOutButton = By.xpath('//a[@href="/users/sign_out"]')

    constructor(driver: WebDriver) {
        super(driver);
    }

    async ClickOnDropDownMenu() {
        await this.findElementAndClick(this.dropDownMenu);
    }
    async ClickOnSignOut() {
        await this.findElementAndClick(this.signOutButton);
    }


}