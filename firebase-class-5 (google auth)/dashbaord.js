import { getAuth, onAuthStateChanged, signOut } from "./firebaseConfig.js"

const auth = getAuth()

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.replace('./index.html');
    }
});

document.querySelector('#signOut_btn').addEventListener('click', ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.

  console.log("signout success")
  
}).catch((error) => {
    // An error happened.
    console.error("signout error", error)
});
});

console.log(auth)