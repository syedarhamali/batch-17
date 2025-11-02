import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "./config.js"
import { getUser } from "./login.js"

window.signUp = (event) => {
    event.preventDefault()
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let phoneNumber = document.getElementById("phoneNumber")

    // {
    //     firstName: 'Arham',
    //     lastName: 'Ali',
    //     phoneNumber: '03352342343',
    //     userId: 'dummyId',
    //     email: 'arhamali63@gmail.com'
    // }

    console.log(email.value, password.value)

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            debugger
            const user = userCredential.user;
            saveDataToDb(firstName, lastName, email, phoneNumber, user.uid)
            console.log(user, 'sahi chal gaya')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, "masla agaya he ")
            // ..
        });

    email.value = ''
}


async function saveDataToDb(firstName, lastName, email, phoneNumber, userId) {
    await setDoc(doc(db, "users", userId), {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        userId: userId
    });
}


// getUser()