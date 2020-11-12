"use strict";

const selectorUtils = require("./../utils/selectorUtils"),
    elementUtils = require("./../utils/elementUtils");

class List {
    constructor({
        page,
        listName
    }) {
        this.componentName = "List";
        this.page = page;
        this.listName = listName;
    }

    async expand () {
        const classAttribute = await elementUtils.getAttribute(this.componentName, this.page, selectorUtils.getXpathSelectorOfCollapseExpandIcon(this.listName), "class");

        if (!classAttribute.includes("expandable")) {
            await elementUtils.clickOn(this.componentName, this.page, selectorUtils.getXpathSelectorOfCollapseExpandIcon(this.listName), "expand list of folders");
        }
        await Promise.resolve("This list has been already expanded");

    }

    async collapse () {
        const classAttribute = await elementUtils.getAttribute(this.componentName, this.page, selectorUtils.getXpathSelectorOfCollapseExpandIcon(this.listName), "class");

        if (classAttribute.includes("collapsible")) {
            await elementUtils.clickOn(this.componentName, this.page, selectorUtils.getXpathSelectorOfCollapseExpandIcon(this.listName), "collapse list of folders");
        }
        await Promise.resolve("This list has been already collapsed");

    }

    async selectOption (optionName) {
        const option = selectorUtils.getXpathSelectorOfOption(this.listName, optionName);

        await elementUtils.hoverOn(this.componentName, this.page, option);
        await elementUtils.clickOn(this.componentName, this.page, option, "select folder");
    }

    async getCount (optionName) {
        return elementUtils.getTextContent(
            this.componentName,
            this.page,
            selectorUtils.getXpathSelectorOfCountElement(this.listName, optionName)
        );
    }
}

module.exports = List;
