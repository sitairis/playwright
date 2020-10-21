"use strict";

const elementUtils = require("./../utils/elementUtils");

class MessageBoard {
    constructor(page) {
        this.componentName = "Message board";
        this.page = page;
    }

    async getBoardText () {
        return await elementUtils.getTextContent(this.componentName, this.page, "//*[@class='emptyDivText']");
    }
}

module.exports = MessageBoard;
