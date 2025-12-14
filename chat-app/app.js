import { auth, createUserWithEmailAndPassword, db, doc, setDoc , onAuthStateChanged } from "./config.js"

function checkUserState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("user mojood hai" , uid)
            setTimeout(() => {
                window.location.replace("./dashboard.html")
                
            }, 5000 );
            // ...
        } else {
            console.log("user mojoood nh he")
            // User is signed out
            // ...
        }
    });

}

checkUserState()


window.signUp = (event) => {
    event.preventDefault()
    document.getElementById("signup-btn").style.display = 'none'
    document.getElementById("loader").style.display = 'inline-block'

    const firstName = document.getElementById("firstName")
    const lastName = document.getElementById("lastName")
    const email = document.getElementById("email")
    const password = document.getElementById("password")


    createUserWithEmailAndPassword(auth, email.value, password.value, lastName.value)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            await setDocInFirebase(user.uid, firstName.value, lastName.value, email.value)
            firstName.value = ''
            lastName.value = ''
            email.value = ''
            password.value = ''
            window.location.replace("./dashboard.html")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}


async function setDocInFirebase(userId, firstName, lastName, email) {
    // Add a new document in collection "cities"
    console.log(userId, firstName, lastName, email)
    await setDoc(doc(db, "users", userId), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        userId: userId
    });
}

// const setDocs  = async () =>{

// }