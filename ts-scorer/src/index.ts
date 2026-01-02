import * as readline from 'readline-sync'

readline.question("Welcome to my application")


let userName: string = readline.question("What's your name ??")
let percentage: string = readline.question("What's your percentage ??")
let toNumber = Number(percentage)


if (toNumber > 50) {
    console.log(userName + 'you are passed!')
} else {
    console.log(userName + "you are failed! ")
}


class Student {
    public personName
    constructor(personName: string) {
        this.personName = personName

    }
}

const user = new Student("Arham")
console.log(user)