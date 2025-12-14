import { auth, onAuthStateChanged, signInWithEmailAndPassword } from "./config.js";
checkUserState()

window.signIn = (event) => {
    event.preventDefault()
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.replace("./dashboard.html")
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

function checkUserState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("user mojood hai", uid)
            window.location.replace("./dashboard.html")
            // ...
        } else {
            console.log("user mojoood nh he")
            // User is signed out
            // ...
        }
    });

}
