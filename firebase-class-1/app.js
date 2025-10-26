import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "./config.js"

window.signup = (event) => {
    event.preventDefault()
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    console.log(email.value, password.value)

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            console.log(userCredential, "ye wo user he jo signup hua he")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

function getUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("user mojood he or login he", user)

            // ...
        } else {
            console.log("user mojood nh he ya login nh he")
            // User is signed out
            // ...
        }
    });
}


window.getUserLogOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

getUser()

window.signin = (event) => {
    event.preventDefault()
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")

    console.log(email.value, password.value)

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            console.log(userCredential, "ye wo user he jo login hua he")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}