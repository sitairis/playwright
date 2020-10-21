"use strict";

const elementUtils = require("./../utils/elementUtils");

class DiscardModel {
    constructor(page) {
        this.componentName = "Discard model";
        this.page = page;
    }

    async clickAccept () {
        await elementUtils.clickOn(this.componentName, this.page, "xpath=//*[@id='#discardDialogdiscardOk']", "discard");
    }

    async clickCancel () {
        await elementUtils.clickOn(this.componentName, this.page, "xpath=//*[@id='#discardDialogdiscardCancel']", "cancel discard");
    }

}

module.exports = DiscardModel;
