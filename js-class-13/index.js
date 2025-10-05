// function sumOfTwoNumbers(numberOne = 1, numberTwo = 0) {
//     console.log(numberOne + numberTwo)
// }


// function printUserName(userName = "Arham") {
//     console.log(userName)
// }




// function getProducts() {
//     fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then(console.log);
// }

// async function getProductData() {
//     let data = null
//     try {
//         const response = await fetch("https://facebook.com/products")
//         data = await response.json()

//     } catch (error) {
//         console.log("Error agaya he", error)
//     }
//     console.log(data)
//     console.log("running")

// }

// // getProducts()
// sumOfTwoNumbers()
// getProductData()
// printUserName("Usman")


const students = ["hassan", "usman" , "rehan" , "zaid" , "sohaib"]

students.map((hassan) => console.log(hassan)) // high order function

// (student) => console.log(student) // call back function

const getProducts = () =>{
    // arrow function 
    // console.log(this) // window
    const myObject = {
        firstName : "Arham",
        lastName: 'Ali',
        age : 24,
        innerWidth: 1000,
        walking : () => {
            console.log(this.innerWidth)
        },
        newObject: {
            newObjectKey : "Ali",
            greet : function greet(){
                console.log(this.firstName)
            }
        }
    }  
    myObject.walking()      
}

getProducts()

// console.log(myObject.firstName)

// console.log(this)
// getProducts()