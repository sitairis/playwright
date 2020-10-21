"use strict";

const Chance  = require("chance");

class Contact {
    constructor({name = "", email = ""} = {}) {
        this.name = name || getChance().name();
        this.email = email || getChance().email();
    }

    getName () {
        return this.name;
    }

    getEmail () {
        return this.email;
    }
}

module.exports = Contact;

/**
 * Get Chance module
 * @return {*} - return Chance
 */
function getChance () {
    return new Chance();
}
