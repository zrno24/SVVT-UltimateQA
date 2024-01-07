import { HomePage } from "../core/page-objects/home-page";
import { RegistrationPage } from "../core/page-objects/registration-page";
import { AutomationPage } from "../core/page-objects/automationPractice-page";
import { CoursePage } from "../core/page-objects/course-page";
import { LoginPage } from "../core/page-objects/login-page";
import { JavaAcademyPage } from "../core/page-objects/javaAcademy-page";
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
let javaAcademyPage: JavaAcademyPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    registrationPage = new RegistrationPage(driver);
    automationPage = new AutomationPage(driver);
    coursePage = new CoursePage(driver);
    loginPage = new LoginPage(driver);
    javaAcademyPage = new JavaAcademyPage(driver);
},10000);

test("Java Academy test", async () => {
    await homePage.goToHomePage();
    await homePage.clickOnJavaAcademy();
    await javaAcademyPage.ClickOnFirstEarlyAccessButton();
    await javaAcademyPage.clickOnFirstNameInput();
    await javaAcademyPage.InputFirstName();
    await javaAcademyPage.clickOnLastNameInput();
    await javaAcademyPage.InputLastName
    await javaAcademyPage.clickOnEmailInput();
    await javaAcademyPage.InputEmail();
    await javaAcademyPage.clickOnPhoneInput();
    await javaAcademyPage.InputPhoneNumber();
    await javaAcademyPage.ClickOnSecondEarlyAccessButton();
},500000);


afterAll(async () => {
    await quitDriver(driver);
},10000);