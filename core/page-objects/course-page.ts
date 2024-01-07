import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CoursePage extends BasePage {

    private searchBar = By.xpath('//input[@type="search"]');
    private allCoursesButton = By.xpath('//a[@class="active"]');
    private signInButton = By.xpath('//a[@href="/users/sign_in"]');
    private codingCourse = By.xpath('//a[@href="/courses/coding-and-testing-an-authentication-api-nodejs-cypress"]');
    private enrollButton = By.xpath('//a[@href="/enroll/1194817?et=free"]');
    private enrolledCourseText = By.xpath('//h1[@class="course-progress__title _course-progress__title_1rtg53"]');
    private viewAllCoursesButton = By.xpath('//section[@class="header__logo header__logo___2909e"]//a[@href="/collections"]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickOnViewAllCourses() {
        await this.findElementAndClick(this.viewAllCoursesButton);
    }

    async clickOnCourse() {
        await this.findElementAndClick(this.codingCourse);
    }

    async clickOnSignIn() {
        await this.findElementAndClick(this.signInButton);
    }

    async clickOnEnrollButton() {
        await this.findElementAndClick(this.enrollButton);
    }

    async assertCorrectCourse() {
        await this.checkMatchingElements(this.enrolledCourseText, "Coding and testing an authentication API [NodeJs + Cypress]");
    }

    async clickOnSearchBar() {
        await this.findElementAndClick(this.searchBar);
    }

    async searchInput() {
        const search = await this.fillInputField(this.searchBar, testData.search_query.java_course_search);
        await this.pressEnterOnElement(search);
    }



}