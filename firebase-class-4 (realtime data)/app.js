import { collection, db, getDocs, onSnapshot, query } from "./firebaseConfig.js"

let posts = [];
let unsubscribe;

let fetchPosts = async () => {
    try {
        const q = query(collection(db, "posts"));
         unsubscribe = onSnapshot(q, (querySnapshot) => {
            posts = []
            querySnapshot.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() })
            });
            console.log(posts)
        });
    } catch (error) {
        console.error(error)
    }
}
fetchPosts();

document.getElementById("btn").addEventListener("click", ()=>{
    unsubscribe() //stop listening
    window.location.href = "./dashboard.html"
})

// let a = [1,2,3];
// let b = a;

// // data manipulation
// b.push(100)
// console.log("b:",b)
// console.log("a:",a)

// let obj  ={
//     a:10,
//     b:20
// }

// let obj2 = {...obj, test:'abc'};
// obj2.a= 200

// console.log(obj);
// console.log(obj2);


