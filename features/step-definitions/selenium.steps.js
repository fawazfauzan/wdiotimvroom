const {Given, When, Then} = require('cucumber');

const SeleniumPage = require('../pageobjects/selenium.page');
const env = require('dotenv').config();

Given(/^User on Selenium Page$/, () =>
{
    SeleniumPage.openPage(process.env.BASEURL)
})

When(/^User fill answer box #1$/, () =>
{
    let title = browser.getTitle();
    SeleniumPage.fillAnswerBox1(title);
})

When(/^User Fill out name section of form to be "([^"]*)?"$/,(name)=>
{
    SeleniumPage.fillNameSection(name);
})

When(/^User Set occupation on form to "([^"]*)?"$/, (occupation) => {
    let occ = occupation.replace(/-|\s/g,"").toLowerCase();
    SeleniumPage.selectedOccupation(occ)
})

When(/^User Count number of blue_boxes on page after form and enter into answer box #4$/, () => {
    let count = SeleniumPage.countElement(SeleniumPage.spanBlueBox);
    SeleniumPage.fillAnswerBox4(count);
})

When(/^User Click link that says "([^"]*)?"$/, (clickMe) => {
    SeleniumPage.clickLink(clickMe)
})

When(/^User Find red box on its page find class applied to it, and enter into answer box #6$/, ()=>
{
    let classValue = SeleniumPage.getClassAttribute(SeleniumPage.spanRedBox);
    SeleniumPage.fillAnswerBox6(classValue);
})

When(/^User Run JavaScript function as: "([^"]*)?" from your Selenium script$/, (runThis)=>
{
    browser.execute(`return ${runThis}`);
})

When(/^User Mark radio button on form for written book\? to Yes$/, () =>
{
    SeleniumPage.inputWroteBook.click();
})

When(/^User Run JavaScript function as: "([^"]*)?" from your Selenium script, take returned value and place it in answer slot #8$/, (got) => {
    let result = browser.execute(`return ${got}`,SeleniumPage.inputAnswer8);
    SeleniumPage.fillAnswerBox8(result);
})

When(/^User Get the text from the Red Box and place it in answer slot #10$/, () => {
    let text = SeleniumPage.spanRedBox.getText();
    SeleniumPage.fillAnswerBox10(text)
})

When(/^User Which box is on top orange or green place correct color in answer slot #11$/, () => {
    let result = SeleniumPage.getTextBoxOnTop();
    SeleniumPage.fillAnswerBox11(result)
})

When(/^User set browser width "([^"]*)?" and height "([^"]*)?"$/, (width, height) => {
    browser.setWindowSize(parseInt(width)-2, parseInt(height)-2)
    const size = browser.getWindowSize();
    console.log(`size = ${size}`);
})

When(/^User Type into answer slot 13 yes or no depending on whether item by id of ishere is on the page$/, () => {
    let result = SeleniumPage.getItemIsHereYesorNo();
    SeleniumPage.fillAnswerBox13(result)
})

When(/^User Type into answer slot 14 yes or no depending on whether item with id of purplebox is visible$/, ()=>{
    let result = SeleniumPage.getItemPurpleBoxVisibleYesorNo();
    SeleniumPage.fillAnswerBox14(result);
})

When(/^User Waiting game: click the link with link text of "([^"]*)?" a random wait will occur and then a new link will get added with link text of "([^"]*)?" - click this new link within 500 ms of it appearing to pass this test$/, (before, after) => {
    SeleniumPage.clickLink(before);
    SeleniumPage.clickLink(after);
})

When(/^User Click OK on the confirm after completing task 15$/, () => {
    browser.acceptAlert();
})

When(/^User Click the submit button on the form$/, () => {
    SeleniumPage.btnSubmit.click();
})

When(/^User click check results$/, ()=> {
    SeleniumPage.btnCheckResults.click();
})

Then(/^Task #1 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo1isOK(result)
})

Then(/^Task #2 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo2isOK(result)
})

Then(/^Task #3 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo3isOK(result)
})

Then(/^Task #4 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo4isOK(result)
})

Then(/^Task #5 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo5isOK(result)
})

Then(/^Task #6 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo6isOK(result)
})

Then(/^Task #7 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo7isOK(result)
})

Then(/^Task #8 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo8isOK(result)
})

Then(/^Task #9 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo9isOK(result)
})

Then(/^Task #10 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo10isOK(result)
})

Then(/^Task #11 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo11isOK(result)
})

Then(/^Task #12 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo12isOK(result)
})

Then(/^Task #13 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo13isOK(result)
})

Then(/^Task #14 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo14isOK(result)
})

Then(/^Task #15 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo15isOK(result)
})

Then(/^Task #16 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo16isOK(result)
})

Then(/^Task #17 is "([^"]*)?"$/, (result) => {
    SeleniumPage.verifyTaskNo17isOK(result)
})