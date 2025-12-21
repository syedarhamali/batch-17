import { auth, getDocs, addDoc, signOut, collection, db, doc, onAuthStateChanged, query, where } from "./config.js";

let userId = null

window.logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.replace('./login.html')
    }).catch((error) => {
        // An error happened.
    });

}

function checkUserState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            userId = uid
            getUsers()
            console.log("user mojood hai", uid)
            // ...
        } else {
            console.log("user mojoood nh he")
            // User is signed out
            // ...
        }
    });

}

checkUserState()

async function getUsers() {
    console.log(userId, "user Id")
    const q = query(collection(db, "users"), where("userId", "!=", userId));

    const querySnapshot = await getDocs(q);
    let friendContainer = document.getElementById("friend-list")
    querySnapshot.forEach((doc) => {
        const userData = doc.data()
        console.log(userData, "ye wo userUID hai jo login hai")
        friendContainer.innerHTML += `<div class="friend-card" id=${doc.id}>
                    <img src="https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg" alt="">
                    <p>${userData.firstName + " " + userData.lastName}</p>
                    <button onclick="checkRoom('${userData.userId}')">Chat </button>  
                </div>`

    });

}


window.checkRoom = async (friendId) => {
 
    const userDetails = { [userId]: true, [friendId]: true }

    let roomId = null

    const q = query(collection(db, "chatrooms"), where(`userDetails.${userId}`, "==", true), where(`userDetails.${friendId}`, "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        roomId = doc.id
    })

    if (roomId) {
        window.location.href = `messages.html?roomId=${doc.id}`
    } else {
        const docRef = await addDoc(collection(db, "chatrooms"), { userDetails, createdAt: new Date(), ownerId: userId });
        window.location.href = `messages.html?roomId=${docRef.id}`

    }

}

