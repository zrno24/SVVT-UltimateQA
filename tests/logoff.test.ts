import { HomePage } from "../core/page-objects/home-page";
import { RegistrationPage } from "../core/page-objects/registration-page";
import { AutomationPage } from "../core/page-objects/automationPractice-page";
import { CoursePage } from "../core/page-objects/course-page";
import { LoginPage } from "../core/page-objects/login-page";
import { LogoutPage } from "../core/page-objects/logout-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver} from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let registrationPage: RegistrationPage;
let automationPage: AutomationPage;
let coursePage: CoursePage;
let loginPage: LoginPage;
let logoutPage: LogoutPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    registrationPage = new RegistrationPage(driver);
    automationPage = new AutomationPage(driver);
    coursePage = new CoursePage(driver);
    loginPage = new LoginPage(driver);
    logoutPage = new LogoutPage(driver);
},10000);

test("Logoff test", async () => {
    await homePage.goToHomePage();
    await homePage.hoverLearningElement();
    await homePage.clickOnAutomationButton();
    await homePage.goToHomePage();
    await homePage.hoverLearningElement();
    await homePage.clickOnAutomationButton();
    await automationPage.goToLoginPage();
    await loginPage.clickOnEmailInput();
    await loginPage.InputEmail();
    await loginPage.clickOnPasswordInput();
    await loginPage.InputPassword();
    await loginPage.ClickOnSignInButton();
    await logoutPage.ClickOnDropDownMenu();
    await logoutPage.ClickOnSignOut();
},500000);


afterAll(async () => {
    await quitDriver(driver);
},10000);