"use strict";

const elementUtils = require("./../utils/elementUtils");

class Toolbar {
    constructor(page) {
        this.componentName = "Toolbar";
        this.page = page;
    }

    async openCreateMessageForm () {
        await elementUtils.clickOn(this.componentName, this.page, "xpath=//*[contains(@class, 'tb-item-new-mail')]/button", "open Create new message from");
    }

    async openDiscardModel () {
        await elementUtils.clickOn(this.componentName, this.page, "xpath=//*[text()='Discard']/ancestor::button", "open discard model");
    }
}

module.exports = Toolbar;
