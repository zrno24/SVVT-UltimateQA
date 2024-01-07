import { HomePage } from "../core/page-objects/home-page";
import { RegistrationPage } from "../core/page-objects/registration-page";
import { AutomationPage } from "../core/page-objects/automationPractice-page";
import { CoursePage } from "../core/page-objects/course-page";
import { LoginPage } from "../core/page-objects/login-page";
import { LogoutPage } from "../core/page-objects/logout-page";
import { ProfilePage } from "../core/page-objects/profile-page";
import { BlogPage } from "../core/page-objects/blog-page";
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
let blogPage: BlogPage;
let profilePage: ProfilePage;
let logoutPage: LogoutPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    registrationPage = new RegistrationPage(driver);
    automationPage = new AutomationPage(driver);
    coursePage = new CoursePage(driver);
    loginPage = new LoginPage(driver);
    blogPage = new BlogPage(driver);
    logoutPage = new LogoutPage(driver);
    profilePage = new ProfilePage(driver);
},10000);

test("Name change test", async () => {
    await homePage.goToHomePage();
    await homePage.hoverLearningElement();
    await homePage.clickOnAutomationButton();
    await automationPage.goToLoginPage();
    await loginPage.InputEmail();
    await loginPage.InputPassword();
    await loginPage.ClickOnSignInButton();
    await logoutPage.ClickOnDropDownMenu();
    await logoutPage.clickOnMyAcc();
    await profilePage.clickOnFirstNameInput();
    await profilePage.newFirstNameInput();
    await profilePage.clickOnLastName();
    await profilePage.newLastNameInput();
    await profilePage.clickOnSubmit();
    await profilePage.assertSuccessfulChange();
},500000);


afterAll(async () => {
    await quitDriver(driver);
},10000);
