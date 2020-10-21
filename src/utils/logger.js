"use strict";

const log4js = require("log4js");

class Logger {
    constructor() {
        this.logger = log4js.getLogger();
        this.logger.level = "debug";
    }

    getLogger () {
        return this.logger;
    }
}

module.exports = Logger;
