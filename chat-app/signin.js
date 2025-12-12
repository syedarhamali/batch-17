import { auth, signInWithEmailAndPassword } from "./config.js";

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