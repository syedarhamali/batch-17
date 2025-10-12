class User {
    constructor(firstName, lastName, email, password, id) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + lastName
        this.email = email
        this.password = password
    }
}

const users = JSON.parse(localStorage.getItem("users")) || []


function userSignUp(event) {
    event.preventDefault()
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let isExist = users.find((element) => element.email === email.value)
    console.log(isExist)
    if (isExist?.id) {
        alert("User already exist")
    } else {
        let user = new User(firstName.value, lastName.value, email.value, password.value, users.length + 1)
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
    }
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
}

function userSignIn(event) {
    event.preventDefault()

    let email = document.getElementById("user-email")
    let password = document.getElementById("user-password")
    let loggedInUser = users.find((element) => element.email === email.value && element.password === password.value)
    if (loggedInUser?.id) {
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
        window.location.href = "dashboard.html"
    } else {
        alert("Invalid Credientials")
    }

}

function checkLoggedInUser(){
    let user = JSON.parse(localStorage.getItem("loggedInUser"))
    if(user?.id){
        window.location.href = "dashboard.html"
    }
}

checkLoggedInUser()