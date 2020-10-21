"use strict";

const faker = require("faker"),
    Contact = require("./contact");

class Message {
    constructor({to = [new Contact()], cc = [new Contact()], text = "", subject = ""}) {
        this.text = text || faker.lorem.sentence(10);
        this.to = to;
        this.cc = cc;
        this.subject = subject || faker.lorem.sentence(3);
    }

    getText () {
        return this.text;
    }

    getTo () {
        return this.to;
    }

    getCc () {
        return this.cc;
    }

    getSubject () {
        return this.subject;
    }

}

module.exports = Message;
