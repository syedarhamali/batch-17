import * as readline from 'readline-sync';
readline.question("Welcome to my application");
let userName = readline.question("What's your name ??");
let percentage = readline.question("What's your percentage ??");
let toNumber = Number(percentage);
if (toNumber > 50) {
    console.log(userName + 'you are passed!');
}
else {
    console.log(userName + "you are failed! ");
}
class Student {
    personName;
    constructor(personName) {
        this.personName = personName;
    }
}
const user = new Student("Arham");
console.log(user);
//# sourceMappingURL=index.js.map