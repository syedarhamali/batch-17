// function changeContent() {
//     var userName = document.getElementById("personName")
//     console.log(userName.value)

//     var userEmail = document.getElementById("personEmail")
//     console.log(userEmail.value)
       

// }

var todos = []

var updateButton = document.getElementById("update-btn")
var addButton = document.getElementById("add-btn")

function addTodo(){
    var inputElement = document.getElementById("todo")

    if(inputElement.value === ''){
        alert("please write something!")
        return
    } 

    todos.push(inputElement.value)
    inputElement.value = ""
    showList()
}

function showList(){
    var listItems = document.getElementById("todo-list")

    listItems.innerHTML = ""
    for(var i= 0; i < todos.length ; i++){
        listItems.innerHTML += `<li> ${todos[i]} <button onclick="deleteTodo(${i})">Delete </button> </li>`
    }
}


function deleteTodo(index){
    todos.splice(index,1)
    showList()
}
