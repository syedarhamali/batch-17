let user = JSON.parse(localStorage.getItem("loggedInUser"))
function checkLoggedInUser() {
    if (!user?.id) {
        window.location.href = "index.html"
    } else {
        let userName = document.getElementById("username")
        userName.innerHTML = user.fullName
    }

}

checkLoggedInUser()
