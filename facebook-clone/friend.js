let users = JSON.parse(localStorage.getItem("users"))
let user = JSON.parse(localStorage.getItem("loggedInUser"))
function checkLoggedInUser() {
    if (!user?.id) {
        window.location.href = "index.html"
    } else {
        let userName = document.getElementById("username")
        let email = document.getElementById("email")
        userName.innerHTML = user.fullName
        email.innerHTML = user.email
    }

}

checkLoggedInUser()

function findFriend() {
    let friendArea = document.getElementById("friends-area")

    let friends = users.filter((element) => element.id !== user.id)
    friends.map((friend) => {
        friendArea.innerHTML += `<li>${friend.email}  <button onclick="sendRequest(${friend.id})">Add Friend</buttton></li>`
    })


}

findFriend();

function sendRequest(friendId){
    let friend = users.find((friend) => friend.id === friendId)
    if(!friend.friendRequest?.length){
        friend.friendRequest = []
        friend.friendRequest.push(user.id)
    } else{
        friend.friendRequest.push(user.id)
    }

    users[friendId - 1] = friend

    localStorage.setItem('users' , JSON.stringify(users))
}