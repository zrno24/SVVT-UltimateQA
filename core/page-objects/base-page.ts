import { By, WebDriver, WebElement, until, get } from "selenium-webdriver";
const { Key } = require('selenium-webdriver');


export default class BasePage {
    protected driver: WebDriver;


    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async getTitle() {
        return await this.driver.getTitle();
    }
    async checkMatchingElements(selector: By, matchingItem: string) {
        const element = await this.findElement(selector);
        const elementText = await element.getText();
        expect(elementText).toMatch(matchingItem);
    }
    async checkTitle(page: { getTitle: () => Promise<string>}, page_title: string) {
        let title = await page.getTitle();
        expect(title).toMatch(page_title);
    }  
    async waitAndClick(elementLocator, timeout) {
        await this.driver.wait(
            until.elementLocated(elementLocator), timeout).click();
    }

    async clearInput(selector: By) {
        const element = await this.findElement(selector);
        await element.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.BACK_SPACE);
    }

    async pressEnterOnElement(element: WebElement) {
        await element.sendKeys(Key.ENTER);
    }
   
    async waitForElement(elementLocator, timeout) {
        return this.driver.wait(until.elementLocated(elementLocator), timeout);
    }
    async hoverElement(element: WebElement) {
        const actions = this.driver.actions({ bridge: true });
        await actions
                    .move({ duration: 2000, origin: element, x: 0, y: 0 })
                    .perform();
    }
    async scrollToElement(element: WebElement): Promise<void> {
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    }
    async findElement(selector: By) {
        return await this.driver.findElement(selector)
    }
    async findElementAndClick(selector:By){
        await this.driver.wait(
            until.elementLocated(selector),10000
        ).click()
    }
    async fillInputField(inputField: By, text: string) {
        await (await this.findElement(inputField)).sendKeys(text);
    }
    

}
