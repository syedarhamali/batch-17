
// fetch('/users')
// fetch('/messages')
// fetch('/notifications')


let fetchUser = async()=>{
    try {
        let users = await fetch('/users')
        let messages = await fetch('/messages')
    } catch (error) {
        console.log(error)
    }
}
let fetchMessges = async()=>{
    try {
        let users = await fetch('/users')
        let messages = await fetch('/messages')
    } catch (error) {
        console.log(error)
        
    }
}
let fetchNotification = async()=>{
    try {
        let users = await fetch('/users')
        let messages = await fetch('/messages')
    } catch (error) {
        
        console.log(error)
    }
}



// Promise.all([fetchUser,fetchMessges,fetchNotification]).then(()=>{
//     console.log("successfully fetched all data!")
// }).catch((e)=>{
// })


