import { HomePage } from "../core/page-objects/home-page";
import { RegistrationPage } from "../core/page-objects/registration-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { AutomationPage } from "../core/page-objects/automationPractice-page";
import { TwitterPage } from "../core/page-objects/twitter-page";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let registrationPage: RegistrationPage;
let automationPage: AutomationPage;
let twitterPage: TwitterPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    registrationPage = new RegistrationPage(driver);
    automationPage = new AutomationPage(driver);
    twitterPage = new TwitterPage(driver);
},10000);

test("Twitter test", async () => {
    await homePage.goToHomePage();
    await homePage.hoverLearningElement();
    await homePage.clickOnAutomationButton();
    await automationPage.goToComplicatedElementPage();
    await twitterPage.clickOnTwitterButton();
    await twitterPage.assertTwitterName();
},500000);


afterAll(async () => {
    await quitDriver(driver);
},10000);