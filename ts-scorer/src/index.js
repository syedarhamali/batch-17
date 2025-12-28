"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readfile = require("readline-sync");
readfile.question("Welcome to my application");
var userName = readfile.question("What's your name??");
var percentage = readfile.question("What's your percentage??");
var toNumber = Number(percentage);
if (toNumber > 50) {
    console.log(userName + ' you are passed!');
}
else {
    console.log(userName + " you are failed! ");
}
