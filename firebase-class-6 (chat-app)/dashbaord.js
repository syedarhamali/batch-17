import { db, doc, getAuth, getDoc, onAuthStateChanged, signOut } from "./firebaseConfig.js"


let userData = null;
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.replace('./index.html');
    }
});


let getDataFromLocalStorage = JSON.parse(window.localStorage.getItem("userData"))


let getUserFromDB = async () => {
    try {
        let user = await getDoc(doc(db, "users", getDataFromLocalStorage?.id));
        userData = (user.exists()) ? user.data() : null;
        console.log(userData)
    } catch (error) {
        console.error(error)
    }
}
getUserFromDB();




document.querySelector('#signOut_btn').addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.

        console.log("signout success")

    }).catch((error) => {
        // An error happened.
        console.error("signout error", error)
    });
});

console.log(auth)