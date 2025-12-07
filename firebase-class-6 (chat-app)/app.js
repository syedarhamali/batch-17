import { where,collection, db, doc, getAuth, getDoc, GoogleAuthProvider, onAuthStateChanged, query, signInWithPopup, signInWithEmailAndPassword, getDocs } from './firebaseConfig.js'


let emailInp, passwordInp, formData = null;


const provider = new GoogleAuthProvider();

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        // window.location.replace('./dashboard.html');
        const uid = user.uid;
    }

});


let loginUser = async (data) => {
    try {
        await signInWithEmailAndPassword(auth, data?.email, data?.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user)
                //get data from firestore               
                const docRef = await  getDocs(query(collection(db, "users"),where("uid", "==", user?.uid) ))
                let data = docRef.docs[0]
                // console.log("Document written with ID: ", data);

                let userIdData = {
                    uid: user?.uid,
                    id: data?.id,
                }
                window.localStorage.setItem("userData", JSON.stringify(userIdData))

                //navigate to dashboard
                window.location.replace('./dashboard.html');
            });

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





document.querySelector("#signin-form").addEventListener("submit", (e) => {
    e.preventDefault()
    emailInp = e.target[0].value
    passwordInp = e.target[1].value


    formData = {
        email: emailInp,
        password: passwordInp
    }

    console.log("form data:", formData)
    loginUser(formData)
})





let signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            console.log("credentials: ", credential)
            console.log("user: ", user)
            window.location.replace('./dashboard.html');
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.error({
                code: errorCode,
                message: errorMessage
            })
            // ...
        });
}


console.log(auth)

document.querySelector('#google_btn').addEventListener('click', signInWithGoogle);
