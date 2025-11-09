import { arrayUnion, auth, collection, db, doc, getDocs, onAuthStateChanged, query, setDoc, signOut, where } from "./config.js";


function getUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            getUsers(uid)
            console.log("ye user login he abhi", user)
            // ...
        } else {
            // User is signed out
            console.log("ye user login nahi he abhi")
            // ...
        }
    });
}

async function getUsers(currentUserId) {
    const q = query(collection(db, "users"), where("userId", "!=", currentUserId));
    let usersContainer = document.getElementById("users")


    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        const { firstName, lastName } = data || {}
        console.log(data, doc.id)

        usersContainer.innerHTML += `<li data-id="1"
                        class="flex items-center justify-between gap-4 p-3 rounded-lg border hover:shadow-sm">
                        <div class="flex items-center gap-3">
                            <img src="https://i.pravatar.cc/56?img=8" alt="avatar"
                                class="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <div class="font-medium">${firstName + ' ' + lastName}</div>
                                <div class="text-xs text-gray-500">2 mutual friends</div>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <button data-action="add"
                            onClick="handleAddFriend('${doc.id}' , '${currentUserId}')"
                                class="btn-add inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium hover:bg-gray-100">
                                Add Friend
                            </button>
                        </div>
                    </li>`
    });

}

window.handleAddFriend = async (friendId, currentUserId) => {
    console.log(currentUserId, friendId)
    // Add a new document in collection "cities"
    const cityRef = doc(db, 'users', friendId);
    setDoc(cityRef, { friendRequest: arrayUnion(currentUserId) }, { merge: true });
}



window.logOut = () => {
    signOut(auth).then(() => {
        console.log("log out ho chuka he")
        window.location.href = "./login.html"
        // Sign-out successful.
    }).catch((error) => {
        console.log(error, "error agaya he ")
        // An error happened.
    });
}

getUser()
