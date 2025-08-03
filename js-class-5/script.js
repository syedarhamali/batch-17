var arr = ['a', 'b', 'c', 'd'];
console.log(arr[0])

// even or odd
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) { //even
        console.log(i + " is even.")
    }
    else { //odd
        console.log(i + " is odd.")
    }
}

// var input = +prompt('enter any number')
//     if(input%2 === 0){ //even
//         console.log(input+" is even.")
//     }
//     else{ //odd
//         console.log(input+" is odd.")
//     }


for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


var cities = ['karachi', 'lahore', 'islamabad']
var inputValue = prompt('enter a city')
var checkCity = false; 

for (var i = 0; i < cities.length; i++) { //loop on array 
    if (cities[i] === inputValue) { 
        checkCity = true;
        break;
    }
}
// found or not using boolean flag 'checkCity'
if(checkCity === true){
    console.log('yes city found')
}
else{
    console.log('city not found')
}


for(var i=0; i<5; i++){
    if(i==2){
        continue //skip the iteration
    }
    console.log(i)
}




// 1 -----
// take 10 number from user
// count the even numbers and odd numbers


// 2----
//  ask user to print the table of any number
// ask user length of table
//  print the table format by using loop
//  2 x 1 = 2
//  2 x 2 = 4
//.....
