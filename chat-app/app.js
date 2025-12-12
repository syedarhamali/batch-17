import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "./config.js"

window.signUp = (event) => {
    event.preventDefault()
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
    console.log(userId , firstName , lastName , email)
    await setDoc(doc(db, "users", userId), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        userId: userId
    });
}

// const setDocs  = async () =>{

// }