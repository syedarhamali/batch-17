import { arrayRemove, arrayUnion, auth, collection, db, doc, getDoc, getDocs, onAuthStateChanged, query, updateDoc, where } from "./config.js";


const friendRequestContainer = document.getElementById("friendRequests")

function getUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("ye user login he abhi", user)
            getFriendRequests(uid)
            // ...
        } else {
            // User is signed out
            console.log("ye user login nahi he abhi")
            // ...
        }
    });
}

async function getFriendRequests(currentUserId) {

    const docRef = doc(db, "users", currentUserId);
    const docSnap = await getDoc(docRef);
    let currentUserData = null

    if (docSnap.exists()) {
        currentUserData = docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

    const { friendRequest } = currentUserData
    console.log(friendRequest)
    const usersRef = collection(db, "users");
    const q = query(usersRef, where('userId', 'in', friendRequest));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        const { firstName, lastName, userId } = data || {}
        console.log(data, doc.id)

        friendRequestContainer.innerHTML += `<li data-id="1"
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
                            onClick="handleAcceptRequest('${doc.id}' , '${currentUserId}')"
                                class="btn-add inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium hover:bg-gray-100">
                                Accept
                            </button>
                             <button data-action="add"
                            onClick="handleDeleteRequest('${doc.id}' , '${currentUserId}')"
                                class="btn-add inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium hover:bg-gray-100">
                                Decline
                            </button>
                        </div>
                    </li>`
    });
}

window.handleAcceptRequest = async(friendId, currentUserId) => {
    try {
        const friendRef = doc(db, "users", friendId);

        // Atomically add a new friend to the "friends" array field.
        await updateDoc(friendRef, {
            friends: arrayUnion(currentUserId)
        });

          const myRef = doc(db, "users", currentUserId);
        // Atomically remove a friend from the "friendRequests" array field and add friend into friends array.
        await updateDoc(myRef, {
            friendRequest: arrayRemove(friendId),
            friends : arrayUnion(friendId)
        });
    } catch(error){
        console.log(error)
    } 
}

getUser()