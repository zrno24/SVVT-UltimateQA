import { HomePage } from "../core/page-objects/home-page";
import { RegistrationPage } from "../core/page-objects/registration-page";
import { AutomationPage } from "../core/page-objects/automationPractice-page";
import { CoursePage } from "../core/page-objects/course-page";
import { LoginPage } from "../core/page-objects/login-page";
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


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    registrationPage = new RegistrationPage(driver);
    automationPage = new AutomationPage(driver);
    coursePage = new CoursePage(driver);
    loginPage = new LoginPage(driver);

},10000);

test("Smoke test", async () => {
    await homePage.goToHomePage();
    await homePage.hoverLearningElement();
    await homePage.clickOnFreeCourses();
    await coursePage.clickOnSignIn();
    await loginPage.clickOnCreateAccButton();
    await registrationPage.clickOnFirstName();
    await registrationPage.InputFirstName();
    await registrationPage.clickOnLastName();
    await registrationPage.InputLastName();
    await registrationPage.clickOnEmail();
    await registrationPage.InputEmail();
    await registrationPage.clickOnPassword();
    await registrationPage.InputPassword();
    await registrationPage.TickPrivacyPolicy();
    await registrationPage.ClickOnSignUpButton();
    await coursePage.clickOnViewAllCourses();
    await coursePage.clickOnCourse();
    await coursePage.clickOnEnrollButton();
    await coursePage.assertCorrectCourse();
},500000);


afterAll(async () => {
    await quitDriver(driver);
},10000);