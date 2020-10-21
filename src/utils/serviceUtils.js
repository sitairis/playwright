"use strict";

const faker = require("faker");

module.exports = {
    getRandomArrayValue (array) {
        const valuesAmount = array.length - 1,
            randomIndex = faker.random.number(valuesAmount);


        return array[randomIndex];
    }
};
