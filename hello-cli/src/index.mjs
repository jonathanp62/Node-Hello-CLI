/**
 * (#)index.mjs 1.2.0   08/14/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { add, multiply, subtract } from "./utils/math.mjs";
import { argv } from "node:process";

import boxen from "boxen";
import chalk from "chalk";
import pkg from '../package.json' assert {type: 'json'};

const hello = "Hello from version " + pkg.version + "!";
const greeting = chalk.white.bold("Hello again from " + pkg.author + "!");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};

const msgBox = boxen(greeting, boxenOptions);

echoCommandLineArguments();

let message;

if (argv.length === 3) {
    message = `Hello ${argv[2]}, from version ${pkg.version}!`;
} else {
    message = hello;
}

writeToConsole(message);
writeToConsole(msgBox);
writeToConsole(`The sum of 61 and 24 is ${add(61, 24)}`);
writeToConsole(`The difference of 61 and 24 is ${subtract(61, 24)}`);
writeToConsole(`The product of 61 and 24 is ${multiply(61, 24)}`);

/**
 * Write the string to the console.
 *
 * @param  {String} str The string
 */
function writeToConsole(str) {
    console.log(str);
}

/**
 * Echo the command line arguments to the console.
 */
function echoCommandLineArguments() {
    console.log(`There are ${argv.length} arguments`);

    argv.forEach((val, index) => {
        console.log(`${index}: ${val}`);
    });
}
