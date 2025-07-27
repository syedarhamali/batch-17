// var numberOne = +prompt("Enter your first Number")
// var numberTwo = +prompt("Enter your second Number")
// var operator = prompt("Enter your operator")


// if(operator == "+"){
//     console.log(numberOne + numberTwo)
// } else if (operator == "-"){
//     console.log(numberOne - numberTwo)
// } else if(operator == "*"){
//     console.log(numberOne * numberTwo)
// } else if (operator == "/"){
//     console.log(numberOne / numberTwo)
// } else{
//     console.log("Operator not found")
// }


// = assignment operator 
// var numberOne = 5
// == comparision operator
// console.log(5 == '5')
// restictly comparision operator
// console.log(5 === '5')
// greater than
// console.log( 5 >= 2)


var userAge = +prompt("What is your age??");
var userCNIC = prompt("Do you have CNIC?");
var isPakistani = prompt("Are you Pakistani??");

if (userAge >= 18 && userCNIC === 'yes' || isPakistani === "yes") {
    alert("you are Eligible for voting in Pakistan")
} else {
    alert("bachy ho ghar jao")
}

// && me agr 100 condition lgi hui hen to agr ik bh false hogai to poora jawab false hojaeyga.
// || me agr 100 condition lgi hui hen to agr ik bh true hogai to poora jawab true hojaeyga.