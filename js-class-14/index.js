// const getData = async() =>{
//     try{
//         const data = await fetch("https://google.com")
//         console.log(data)
//     } catch(error){
//         throw "Error agaya he"
//         console.log(error)

//     }
//     console.log("running")
// }

// getData()



if (true) {
    var myName = 'Arham' ///global scope
}

// if(true){
//     const myName = 'Arham' ///blocked scope
// }

// function getName() {
//     const newFunction = () => {
//         document.write(`<h1> ${myName} </h1>`)
//     }
//     newFunction()
// }
// console.log(myName)
// getName()

// const userDetails = {
//     personName: 'Arham',
//     age: 24,
//     nationality: 'Pakistani'
// }

// const { personName:userName , age:userAge } = userDetails //Destructing
// console.log(userDetails.personName)
// console.log(userAge)

// function parentFunction() {
//     var password = 'Arham123'
//     const showPassword = () => {
//         console.log(password)
//     }
//     return showPassword
// }

// const childFunction = parentFunction()
// console.log(childFunction())

// function addition(numberOne = 0, numberTwo = 0  , ...remaining){ //rest parameters
//     console.log(numberOne + numberTwo , remaining)
// }

// addition(10,4, 5, 6, 10 , "Arham" , true)


// var person = {
//     personName: 'Arham',
//     age: 24,
//     nationality: 'Pakistani',
//     designation: "Full Stack Developer",
//     medicalStatus: "fit"
// }

// const newObject = {...person , personName: "Sohaib" , medicalStatus: 'Fit'} // shallow copy


// console.log(person , "ye mera purana wala object he ")
// console.log(newObject , "ye mera new wala object he") 

// const myArray = [1,2,3,4,5,6,7,8,9,10]

// myArray.map((element) => console.log(element))


// function mapFunction(array, generator) {
//     return generator(array)
// }

// function addition(values) {
//     for (var i = 0; i <= values.length; i++) {
//         console.log(values[i])
//     }
// }

// mapFunction([1,2,3,4], addition)