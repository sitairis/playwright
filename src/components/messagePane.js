"use strict";

const selectorUtils = require("../utils/selectorUtils"),
    elementUtils = require("./../utils/elementUtils");

class MessagePane {
    constructor(page) {
        this.componentName = "Message pane";
        this.page = page;
    }

    async openMessage (index = 1) {
        await elementUtils.clickOn(this.componentName, this.page, selectorUtils.getXpathSelectorOfMessage(index), "open message");
    }

    async removeMessage (index = 1) {
        await elementUtils.hoverOn(this.componentName, this.page, selectorUtils.getXpathSelectorOfMessage(index));
        await elementUtils.clickOn(this.componentName, this.page, `${selectorUtils.getXpathSelectorOfMessage(index)}//*[@id='btnListDelete']`, "remove message");
    }

    async getFilterPaneLabel () {
        return await elementUtils.getTextContent(this.componentName, this.page, "//*[@id='spanFilterText']");
    }
}

module.exports = MessagePane;
