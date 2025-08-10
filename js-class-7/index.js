// Math.round(19.4) // 19
// Math.ceil(19.4) // 20
// Math.floor(19.9) // 19

// Math.random(); // random number

// parseInt('100')
// Number('100')
// var numberOne = 100
// numberOne.toString()


// new Date()
// var age = currentYear.getFullYear() - dob.getFullYear() 



// function addition(numberOne , numberTwo) {
//     var result = numberOne + numberTwo
//     return result
// }

// var numberOne = +prompt("Enter your first Number")
// var numberTwo = +prompt("Enter your second Number")

// var result = addition(numberOne,numberTwo)
// console.log(result , "result")
// document.write("hello world")



// Task 

let numbers = [10, 15, 22, 33, 40, 55, 60];

function removeEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1); // remove even number
            i--; // adjust index after removing
        }
    }
}

removeEven(numbers);

for (let i = 0; i < numbers.length; i++) {
    document.write("Odd Number:", numbers[i] + "<br />");
}
