let user = JSON.parse(localStorage.getItem("loggedInUser"))
class Post {
    constructor(id, text, ownerId,) {
        this.id = id
        this.text = text
        this.ownerId = ownerId
        this.date = new Date()
        this.like = 0
    }

    incrementLikes() {
        this.likes = this.likes + 1
    }
}

function checkLoggedInUser() {
    if (!user?.id) {
        window.location.href = "index.html"
    } else {
        let userName = document.getElementById("username")
        let userNames = document.getElementById("usernames")
        userName.innerHTML = user.fullName
        userNames.innerHTML = user.fullName
    }

}
checkLoggedInUser()

function logout() {
    localStorage.removeItem("loggedInUser")
    checkLoggedInUser()
}


function handlePost() {
    let postContent = document.getElementById("post-content")
    let post = new Post(user.posts.length + 1, postContent.value, user.id)
    user.posts.push(post)
    localStorage.setItem("loggedInUser", JSON.stringify(user))
    showPosts()
}

function showPosts() {
    let postSection = document.getElementById("post-section")
    const { posts } = user
    postSection.innerHTML = ''
    posts.map((post) => {
        let date = post.date
        postSection.innerHTML += `
        <div class="frame__container">
                        <div class="frame__headline">
                            <img class="headline__image" src="via.placeholder.com/40x40">
                            <div class="frame__column">
                                <p class="headline__title">
                                    ${post.ownerId}
                                </p>
                                <p class="headline__subtitle">
                                    Published by ${user.fullName} · ${date} · <img class="headline__world"
                                        src="https://www.facebook.com/rsrc.php/v3/yD/r/-ZGO_vK2ube.png">
                            </div>
                        </div>
                        <div class="frame__content">
                            <p class="frame__text--small">${post.text}</p>
                        </div>
                        <div class="frame__content">
                            <img class="frame__image" src="http://via.placeholder.com/476x476">
                        </div>
                        <div class="frame__footer">
                            <div class="footer__likes">
                                <img class="footer__image" src="http://via.placeholder.com/14x14">
                                <p class="text__social">Like</p>
                            </div>
                            <div class="footer__comments">
                                <img class="footer__image" src="http://via.placeholder.com/14x14">
                                <p class="text__social">Comment</p>
                            </div>
                            <div class="footer__share">
                                <img class="footer__image" src="http://via.placeholder.com/14x14">
                                <p class="text__social">Share</p>
                            </div>
                            <div class="footer__post-as">
                                <img class="footer__post-as-image" src="http://via.placeholder.com/16x16">
                            </div>
                            <div class="footer__dropdown"></div>
                        </div>
                    </div>`
    })
}

showPosts()