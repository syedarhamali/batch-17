"use strict";
let userName = "ali";
console.log(userName);
let num = 100;
console.log(num);
let array = [10];
let array2 = ["10"];
array.push(20);
console.log(array);
let check = true;
let mixArray = [10, "a"];
mixArray.push(true);
let students = [
    {
        name: 'abc',
        age: 20
    },
    {
        name: 'abc2',
        age: 20,
    },
    {
        name: "",
        age: 30,
    }
];
let std1 = {
    name: 'abc',
    age: 20
};
let std2 = {
    name: 'abc2',
    age: 20,
};
let user1 = {
    name: "",
    age: 30,
    city: "karachi",
    email: "",
    isAdmin: true
};
students.push(std1);
students.push(std2);
students.push(user1);
