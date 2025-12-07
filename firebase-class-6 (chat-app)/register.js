import { getAuth, createUserWithEmailAndPassword, addDoc, collection, db, serverTimestamp } from "./firebaseConfig.js"

let fNameInp, lNameInp, emailInp, passwordInp;
let formData = null;

const auth = getAuth();

let registerUser = async (data) => {

    try {
        await createUserWithEmailAndPassword(auth, data?.email, data?.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user)


                const docRef = await addDoc(collection(db, "users"), {
                    email: user?.email,
                    photoURL: user?.photoURL,
                    displayName: user?.displayName,
                    firstName: data?.firstName,
                    lastName: data?.lastName,
                    phoneNumber: user?.phoneNumber,
                    creationTime: serverTimestamp(),
                    uid: user?.uid,
                })
                console.log("Document written with ID: ", docRef.id);

                let userIdData = {
                    uid: user?.uid,
                    id: docRef.id
                }

                window.localStorage.setItem("userData", JSON.stringify(userIdData))


                //navigate to dashboard
                window.location.replace('./dashboard.html');
            })

    } catch (error) {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        console.error({
            message: errorMessage,
            code: errorCode,
            error: error
        })

    }
}





document.querySelector("#register-form").addEventListener("submit", (e) => {
    e.preventDefault()
    fNameInp = e.target[0].value
    lNameInp = e.target[1].value
    emailInp = e.target[2].value
    passwordInp = e.target[3].value


    formData = {
        firstName: fNameInp,
        lastName: lNameInp,
        email: emailInp,
        password: passwordInp
    }

    console.log("form data:", formData)
    registerUser(formData)
})



