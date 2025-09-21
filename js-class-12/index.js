class User{
    constructor(firstName , lastName , email , password ){
       this.firstName = firstName,
       this.lastName = lastName,
       this.fullName = firstName + " " + lastName,
       this.email = email,
       this.password = password
    }
   
}

let users = []

function userSignUp(event) {
    event.preventDefault()
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")


    console.log(firstName.value, lastName.value, email.value, password.value)
    let user = new User(firstName.value , lastName.value, email.value , password.value )
    users.push(user)
    localStorage.setItem("users" , JSON.stringify(users))
    console.log(user , "ye user bana he " )
    console.log(users , "ye users bany hen " )
}


// const detail = {
//     userName: "Arham",
//     age: 23
// }

// let { userName, age } = detail // destructing hai ye 
// console.log(userName)