"use strict";

const Logger = require("./logger"),
    logger = new Logger().getLogger();

module.exports = {

    async waitForPageLoaded (page) {
        await page.waitForLoadState("networkidle");
        await page.waitForSelector("xpath=//*[@id='popupContent']", {state: "hidden"});
    },

    async goto (page) {
        const URL = "https://ej2.syncfusion.com/showcase/typescript/webmail/#/home";

        logger.info(`Open browser on ${URL}`);
        try {
            await page.goto(URL);
        } catch (error) {
            throw new Error(`can not go to ${URL}:: ${error}`);
        }
    },

    async hoverOn (componentName, page, elementSelector) {
        logger.info(`${componentName}: hover on element (${elementSelector})`);
        try {
            await page.hover(elementSelector);
        } catch (error) {
            throw new Error(`${componentName}: can not get text content of element(${elementSelector}):: ${error}`);
        }
    },

    async focus (componentName, page, elementSelector) {
        logger.info(`${componentName}: focus on element (${elementSelector})`);
        try {
            await page.focus(elementSelector);
        } catch (error) {
            throw new Error(`${componentName}: can not focus on element(${elementSelector}):: ${error}`);
        }
    },

    async getTextContent (componentName, page, elementSelector) {
        logger.info(`${componentName}: get text content of element (${elementSelector})`);
        try {
            const text = await page.textContent(elementSelector);

            logger.info(`${componentName}: get text content of element (${elementSelector}): ${text}`);

            return text;
        } catch (error) {
            throw new Error(`${componentName}: can not get text content of element(${elementSelector}):: ${error}`);
        }
    },

    async getEvalText (componentName, page, elementSelector) {
        logger.info(`${componentName}: get text content of element (${elementSelector})`);
        try {
            const text = await page.$eval(elementSelector, (input) => input.value);

            logger.info(`${componentName}: get text content of element (${elementSelector}): ${text}`);

            return text;
        } catch (error) {
            throw new Error(`${componentName}: can not get text content of element(${elementSelector}):: ${error}`);
        }
    },

    async getInnerText (componentName, page, elementSelector) {
        try {
            const text = await page.innerText(elementSelector);

            logger.info(`${componentName}: get inner text of element (${elementSelector}): ${text}`);

            return text;
        } catch (error) {
            throw new Error(`${componentName}: can not get inner text of element(${elementSelector}):: ${error}`);
        }
    },

    async getAttribute (componentName, page, elementSelector, attribute) {
        try {
            const attributeValue = await page.getAttribute(elementSelector, attribute);

            logger.info(`${componentName}: get ${attribute} attribute of element (${elementSelector}): ${attributeValue}`);

            return attributeValue;
        } catch (error) {
            throw new Error(`${componentName}: can not get ${attribute} attribute of element(${elementSelector}):: ${error}`);
        }
    },

    async clickOn (componentName, page, elementSelector, message = "") {
        logger.info(`${componentName}: click on element(${elementSelector}) to ${message}`);
        try {
            await page.click(elementSelector);
        } catch (error) {
            throw new Error(`${componentName}: can not click on element(${elementSelector}):: ${error}`);
        }
    },

    async fill (componentName, page, elementSelector, value) {
        logger.info(`${componentName}: fill text '${value}' in element(${elementSelector})`);
        try {
            await page.type(elementSelector, value, {delay: 100});
        } catch (error) {
            throw new Error(`${componentName}: can not fill in element(${elementSelector}):: ${error}`);
        }
    },

    async pressEnter (componentName, page, elementSelector) {
        logger.info(`${componentName}: press Enter`);
        try {
            await page.focus(elementSelector);
            await page.press("#submit", "Enter");
        } catch (error) {
            throw new Error(`${componentName}: can not press Enter:: ${error}`);
        }
    }

};
