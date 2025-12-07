let userName: string = "ali";
console.log(userName)

let num: number = 100;
console.log(num)



let array: number[] = [10]
let array2: string[] = ["10"]

array.push(20)
console.log(array)
let check: boolean = true


let mixArray: (number | string | boolean)[] = [10, "a"]
mixArray.push(true)




// interfaces
interface Student {
    name: string,
    age: number
}
interface User {
    name: string,
    age: number,
    city: string,
    email: string,
    isAdmin: boolean
}


let students: Student[] = [
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

]

let std1: Student = {
    name: 'abc',
    age: 20
}
let std2: Student = {
    name: 'abc2',
    age: 20,
}

let user1: User = {
    name: "",
    age: 30,
    city: "karachi",
    email: "",
    isAdmin: true
}

students.push(std1)
students.push(std2)
students.push(user1)

