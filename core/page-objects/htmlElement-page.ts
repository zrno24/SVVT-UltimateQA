import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HtmlPage extends BasePage {

    private htmlButton = By.id('idExample');
    private assertButton = By.xpath('//h1[@class="entry-title"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickOnIdButton() {
        await this.findElementAndClick(this.htmlButton);
    }

    async assertButtonSuccess() {
        await this.checkMatchingElements(this.assertButton, "Button success");
    }




}