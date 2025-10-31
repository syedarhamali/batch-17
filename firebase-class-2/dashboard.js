import { auth, onAuthStateChanged, signOut } from "./config.js";

function getUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("user mojood he or login he", user)

            // ...
        } else {
            window.location.href = './index.html'
            console.log("user mojood nh he ya login nh he")
            // User is signed out
            // ...
        }
    });
}

getUser()



window.getUserLogOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
