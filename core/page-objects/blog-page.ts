import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class BlogPage extends BasePage {

    private olderEntriesButton = By.xpath('//a[@href="https://ultimateqa.com/blog/page/2/?et_blog"]');
    private articleButton = By.xpath('//h2[@class="entry-title"]//a[@href="https://ultimateqa.com/mastering-playwright-how-to-create-effective-page-objects/"]');



    constructor(driver: WebDriver) {
        super(driver);
    }

    async scrollAndClickOnOlderEntries() {
        await this.scrollToElement(this.olderEntriesButton);
        await this.waitAndClick(this.olderEntriesButton, 5000);
    }

    async clickOnArticle() {
        await this.findElementAndClick(this.articleButton);
    }


}