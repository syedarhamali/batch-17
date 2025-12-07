import { collection, db, getAuth, getDocs, query, where } from "./firebaseConfig.js";


const auth = getAuth()
let localStorageData = JSON.parse(window.localStorage.getItem("userData"))

let containerDiv = document.querySelector(".container")
console.log(containerDiv)

let getAllUsers = async()=>{
    try {
        // get all user except the login one
        let users = await getDocs(query(collection(db, "users"), where("uid", "!=", localStorageData?.uid)))
        console.log(users.docs)
        users.docs.forEach((doc) => {
            let user = doc.data()
            console.log(user)
            //list users in UI
            containerDiv.innerHTML += `<div class="p-3 border m-2 border-primary">
            <div><span class="fs-2 font-weight-bold">Name: </span><span class="fs-2 text-primary">${(user?.displayName) ? user?.displayName : (user?.firstName || user?.lastName)?`${user?.firstName} ${user?.lastName}`: "no name"}</span></div>
            <h3>email: ${(user?.email) ? user?.email :  "no name"}</h3>
            </div>`
            
        });
    
    
    } catch (error) {
        console.error(error)
    }
}
getAllUsers()