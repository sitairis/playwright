const playwright = require("playwright"),
    elementUtils = require("./../src/utils/elementUtils"),
    Toolbar = require("./../src/components/toolbar"),
    existedContacts = require("./../data/existedContacts"),
    Message = require("./../model/message"),
    Contact = require("./../model/contact"),
    NewMessageForm = require("./../src/components/newMessageForm"),
    MessageBoard = require("./../src/components/messageBoard"),
    DiscardModel = require("./../src/components/discardModel");


describe("Send message", () => {
    let page, browser, messagePane, newMessageForm, toolbar;
    const contact = new Contact(existedContacts[0]);
    const message = new Message({
        to: [contact],
        cc: [contact]
    });

    beforeAll(async () => {
        // Run test on local machine without moon
        // browser = await playwright.chromium.launch({headless: false});

        // Run test with moon deployed in DO
        browser = await playwright.chromium.connect({wsEndpoint:'ws://68.183.240.56:4444/playwright/chromium'});

        const context = await browser.newContext();

        page = await context.newPage();

        await elementUtils.goto(page);
        await elementUtils.waitForPageLoaded(page);
    });

    test("Open new message form and check two contacts are displayed in To field", async () => {
        toolbar = new Toolbar(page);
        newMessageForm = new NewMessageForm(page);

        await toolbar.openCreateMessageForm();
        await newMessageForm.fillInToField();
        await expect(newMessageForm.getToFieldText()).resolves.toBe(message.getTo()[0].getEmail());

    });

    test("Select Cc and check contact is displayed in Cc field", async () => {
        await newMessageForm.fillInCcField(message.getCc());
        await expect(newMessageForm.getCcFieldText()).resolves.toBe(message.getTo()[0].getEmail());

    });

    test("Enter message subject and text and check test is displayed", async () => {
        await newMessageForm.fillInSubject(message.getSubject());
        await newMessageForm.fillInText(message.getText());
        await expect(newMessageForm.getTextFieldText()).resolves.toBe(message.getText());

    });

    test("Enter message text and check test is displayed", async () => {
        const discardModel = new DiscardModel(page);

        await toolbar.openDiscardModel();
        await discardModel.clickAccept();
        messagePane = new MessageBoard(page);

        await expect(messagePane.getBoardText()).resolves.toBe("Choose a message to read it.");

    });

    afterAll(async () => {
        await browser.close();
    });
});
