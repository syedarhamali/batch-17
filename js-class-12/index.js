class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.fullName = firstName + " " + lastName,
            this.email = email,
            this.password = password
    }

}

let users = JSON.parse(localStorage.getItem("users"))

function userSignUp(event) {
    event.preventDefault()
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email") // user ne type kea he ye email
    let password = document.getElementById("password")

    const savedData = JSON.parse(localStorage.getItem("users"))

    let result = savedData.find((element) =>  element.email == email.value )
    if(result?.email){
        alert("user already exist")
    } else{
        console.log(firstName.value, lastName.value, email.value, password.value)
        let user = new User(firstName.value, lastName.value, email.value, password.value)
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
    }
}

function signUp() {
    console.log("We")
}

// const detail = {
//     userName: "Arham",
//     age: 23
// }

// let { userName, age } = detail // destructing hai ye
// console.log(userName)



const usersData = [{ name: 'arham', age: 24 }, { name: "Hassan", age: 17 }, { name: 'Haris', age: 20 }]

let result = usersData.find((element) =>  element.name == "arham" )
console.log(result)