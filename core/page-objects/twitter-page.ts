import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class TwitterPage extends BasePage {

    private twitterButton = By.xpath('//li[@class="et_pb_social_media_follow_network_0 et_pb_social_icon et_pb_social_network_link  et-social-twitter"]//a[@href="https://twitter.com/Nikolay_A00"]');
    private twitterNameText = By.xpath('//div[@class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l"]//div[@class="css-175oi2r r-1awozwy r-18u37iz r-dnmrzs"]//div[@dir="ltr"]//span[@class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3"]//span[@class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickOnTwitterButton() {
        await this.findElementAndClick(this.twitterButton);
    }

    async assertTwitterName() {
        await this.checkMatchingElements(this.twitterNameText, "Nikolay Advolodkin");
    }


}