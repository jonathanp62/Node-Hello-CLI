#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
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

console.log(hello);
console.log(msgBox);