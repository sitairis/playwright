const playwright = require("playwright"),
    elementUtils = require("./../src/utils/elementUtils"),
    {addAttach} = require("jest-html-reporters/helper"),
    MessagePane = require("./../src/components/messagePane"),
    List = require("../src/components/list");


describe("Remove unread message", () => {
    let leftNavigation, page, browser, messagePane;

    beforeAll(async () => {
        browser = await playwright.chromium.launch({headless: false});
        const context = await browser.newContext();

        page = await context.newPage();

        await elementUtils.goto(page);
        leftNavigation = new List({page, listName: "Andrew Fuller"});
    });

    afterEach(async () => {
        await addAttach(await page.screenshot(), "take screen");
    });

    test("Check there are 20 unread messages", async () => {
        await page.waitForLoadState("networkidle");
        await expect(leftNavigation.getCount("Inbox")).resolves.toBe("20");

    });

    test("Check folder name is Inbox", async () => {
        await leftNavigation.selectOption("Inbox");
        messagePane = new MessagePane(page);
        await expect(messagePane.getFilterPaneLabel()).resolves.toBe("Inbox");

    });

    test("Remove one message and check there are 19 unread messages", async () => {
        await messagePane.removeMessage();
        await expect(leftNavigation.getCount("Inbox")).resolves.toBe("19");

    });

    afterAll(async () => {
        await browser.close();
    });
});
