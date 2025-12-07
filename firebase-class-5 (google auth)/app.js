import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from './firebaseConfig.js'


const provider = new GoogleAuthProvider();



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.replace('./dashboard.html');
        const uid = user.uid;
    }
   
});




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
