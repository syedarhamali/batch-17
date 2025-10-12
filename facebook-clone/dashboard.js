function checkLoggedInUser(){
    let user = JSON.parse(localStorage.getItem("loggedInUser"))
    if(!user?.id){
        window.location.href = "index.html"
    } else{
        let userName = document.getElementById("username")
        let email = document.getElementById("email")
        userName.innerHTML = user.fullName
        email.innerHTML = user.email
    }

}
checkLoggedInUser()

function logout() {
    localStorage.removeItem("loggedInUser")
    checkLoggedInUser()
}
