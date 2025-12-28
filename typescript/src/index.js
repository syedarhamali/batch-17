"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var personName = 'Arham'; //inference type
// personName = 123
var age = 123;
var user = {
    personName: 'Arham',
    age: 23,
    isGraduate: true,
    dataOfBirth: '12-02-2001',
    nationality: 'Pakistani'
};
console.log(personName);
// Function to check result
function checkResult(student) {
    if (student.score >= 50) {
        return student.name + " passed 🎉";
    }
    else {
        return student.name + " failed 😢";
    }
}
// Ask user for their name
var name = readline.question("Enter your name: ");
// Ask user for their score
var scoreInput = readline.question("Enter your score (0-100): ");
var score = Number(scoreInput);
// Create student
var student = { name: name, score: score };
// Show result
console.log(checkResult(student));
