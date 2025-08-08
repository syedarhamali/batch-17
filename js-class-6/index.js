// var yourCity = prompt("Enter your city")

// var cities = ['karachi' , 'Islamabad', 'lahore', 'multan']

// cities.push(newCity)

// console.log(cities)

// // for(var i = 0 ; i < cities.length ; i++){
// // }
// if(yourCity === 'islamabad'){
//     console.log(cities[i] + " is the cleanest city of Pakistan")
// }


// if(yourCity.toUpperCase() === 'ISLAMABAD'){
//     console.log(yourCity.toLowerCase() + " is the cleanest city of Pakistan")
// }


var myParagraph = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
be "the Second World War." So let's search the following sentence for the banned characters
and replace them World War II. with the phrase that the New Yorker prefers.
It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
writing the trilogy, which contains, with World War II. the weird applicability available only to poetry and
myth, the essential notion that the good gray wizard can understand the evil magi precisely
because he is just enough like them to grasp their minds and motives in ways World War II. that they cannot
grasp his.`

// console.log(myParagraph)

// for (var i = 0; i < myParagraph.length; i++) {
//     if (myParagraph.slice(i, i + 12) === "World War II") {
//         myParagraph = myParagraph.slice(0, i) + "the Second World War" + myParagraph.slice(i + 12);
//     }
// }

var newParagraph = myParagraph.replace("The New Yorker" , "Hello world")

console.log(myParagraph)
console.log(newParagraph)