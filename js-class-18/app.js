// new promise


// let getUsers = new Promise((resolve, reject)=>{
//     // api fetch
    
//     setTimeout(()=>{
//          resolve('users')

//     },1000)
// });
// let getMessages = new Promise((resolve, reject)=>{
//     // api fetch
//     setTimeout(()=>{
//          resolve('messages')
//     },1000)
// });
// let getProducts =  new Promise((resolve, reject)=>{
//     // api fetch
//     setTimeout(()=>{
//         //  resolve(' products')
//          reject('error in fetching products')
//     },1000)

// });


// Promise.all([getUsers,getMessages,getProducts]).then(()=>{
//     console.log('all data fetched.')
// }).catch((e)=>{
//     console.log("error: ",e)
// })



let result = (true) ? 'pass' : "fail";
// console.log(result)




let arr = [{id:1, result: true},{id:2, result: false},{id:3, result: true}]


let fitlerData  = arr.filter((item)=> item.result == true);
// console.log(fitlerData)

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

let numbers = [23,46,88,2,667,8,2];
numbers.sort((a,b)=> b - a);
console.log(numbers);

const students = [
  { name: "Alice", age: 20, grade: 88, class:"A" },
  { name: "Bob", age: 22, grade: 75, class:"A" },
  { name: "Charlie", age: 19, grade: 92, class:"B" },
  { name: "Diana", age: 21, grade: 85, class:"A" },
  { name: "Ethan", age: 20, grade: 90, class:"B" }
];

// students.sort((a,b)=> a.grade - b.grade)
// console.log(students);

let classAStds = students.filter((obj)=> obj.class == "A");
let classBStds = students.filter((obj)=> obj.class == "B");

classAStds.sort((a,b)=> a.grade - b.grade)
classBStds.sort((a,b)=> a.grade - b.grade)
console.log(classAStds);
console.log(classBStds);


document.querySelector("#apply-btn").addEventListener("click",()=>{
    let selectInput = document.querySelector("#filterSelect").value;

    if(selectInput === ''){
        console.log("please select the option");
        return
    }
    students?.sort((a,b)=> (selectInput == 'age') ? a?.age-b?.age : a?.grade-b?.grade )
    
console.log(students)
    // students.sort((a,b)=> )
});


// nullish operator
let num = null;
let check = num ?? undefined ?? 0;
console.log(check)

let height = '';
let checkHeight = height || 0 || 80;
console.log(checkHeight)



let firstFn = ()=>{
    console.log("first call")
    return ()=>{
        console.log("second call")
         return ()=>{
        console.log("third call")
    }
    }
}

let a = firstFn();
let b = a();
b();


let sum = (a)=>{
    console.log(a )
    let cal = a *100 /20
    return (b)=>{
        console.log(cal +b )
        return (c)=>{
        console.log(c )
    }
    }
}
sum(10)(15)(20) // function currying

