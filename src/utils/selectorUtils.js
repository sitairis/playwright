"use strict";

module.exports = {
    getXpathSelectorOfCollapseExpandIcon (listName) {
        return `xpath=//*[contains(text(), '${listName}')]/ancestor::li//div[contains(@class, 'e-icons')]`;
    },

    getXpathSelectorOfCountElement (listName, optionName) {
        return `//*[contains(text(), '${listName}')]/ancestor::li/ul//*[@class='treeCount ${optionName}']`;
    },

    getXpathSelectorOfOption (listName, optionName) {
        return `//*[contains(text(), '${listName}')]/ancestor::li/ul//*[@class='treeCount ${optionName}']/ancestor::li[contains(@class, 'e-list-item e-level-2')]`;
    },

    getXpathSelectorOfMessage (index) {
        return `(//*[contains(@class,'message-pane')]//div[contains(@class, 'template-container')]/..)[${index}]`;
    },

    getXpathSelectorOfInput (id) {
        return `//*[@id="btnTo"]//input[@id="${id}"]`;
    }
};
