"use strict";

const elementUtils = require("./../utils/elementUtils");

class NewMessageForm {
    constructor(page) {
        this.componentName = "New message form";
        this.page = page;
    }

    async fillInToField () {
        await elementUtils.clickOn(this.componentName, this.page, "xpath=//button[@id=\"btnTo\"]/following::div", "active input field");
        await this.page.waitForSelector("xpath=//*[@id='autoTo_popup']");
        await elementUtils.hoverOn(this.componentName, this.page, "xpath=//*[@id='autoTo_popup']//li");
        await elementUtils.clickOn(this.componentName, this.page, "xpath=//*[@id='autoTo_popup']//li", "select the first contact");
    }

    async fillInSubject (subject) {
        const xpathSelectorSubject = "//*[@id='txtSubject']";

        await elementUtils.clickOn(this.componentName, this.page, xpathSelectorSubject, "active input field");
        await elementUtils.fill(this.componentName, this.page, xpathSelectorSubject, subject);
    }

    async fillInText (text) {
        const xpathSelectorText = "//*[@id='mailContentMessage']";

        await elementUtils.clickOn(this.componentName, this.page, xpathSelectorText, "active input field");
        await elementUtils.fill(this.componentName, this.page, xpathSelectorText, text);
    }

    async getToFieldText () {
        return await elementUtils.getInnerText(this.componentName, this.page, "xpath=//*[@class='mail-id'][1]//div[@class='contacts-value-text-style']");
    }

    async getCcFieldText () {
        return await elementUtils.getInnerText(this.componentName, this.page, "xpath=//*[@class='mail-id'][2]//div[@class='contacts-value-text-style']");
    }

    async getTextFieldText () {
        return await elementUtils.getInnerText(this.componentName, this.page, "//*[@id='mailContentMessage']");
    }

    async fillInCcField () {
        await elementUtils.clickOn(this.componentName, this.page, "xpath=//button[@id=\"btnCc\"]/following::div", "active input field");
        await this.page.waitForSelector("xpath=//*[@id='autoCc_popup']");
        await elementUtils.hoverOn(this.componentName, this.page, "xpath=//*[@id='autoCc_popup']//li");
        await elementUtils.clickOn(this.componentName, this.page, "xpath=//*[@id='autoCc_popup']//li", "select the first contact");

    }
}

module.exports = NewMessageForm;
