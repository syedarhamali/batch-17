import { addDoc, auth, collection, createUserWithEmailAndPassword, db, doc, onAuthStateChanged, setDoc, signInWithEmailAndPassword, signOut } from "./config.js"

window.signup = async (event) => {
    event.preventDefault()
    debugger
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let age = document.getElementById("age")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    console.log(email.value, password.value)


    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            const user = userCredential.user;
            addDocToDB(firstName, lastName, age, email , user.uid)
            console.log(userCredential, "user k credientials mil jayengy")
            // Signed up 

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

async function addDocToDB(firstName, lastName, age, email , id) {
    console.log("running")
    await setDoc(doc(db, "users", id), { firstName: firstName.value, lastName: lastName.value, age: age.value, email: email.value , userId: id });
}

function getUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("user mojood he or login he", user)
            setTimeout(() => {
                if (uid) {
                    window.location.href = './dashboard.html'
                }
            }, 1000);

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