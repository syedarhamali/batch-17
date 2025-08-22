// function changeContent() {
//     var userName = document.getElementById("personName")
//     console.log(userName.value)

//     var userEmail = document.getElementById("personEmail")
//     console.log(userEmail.value)

// }


var todos = JSON.parse(localStorage.getItem("todos")) || []

var updateButton = document.getElementById("update-btn")
var addButton = document.getElementById("add-btn")
var inputElement = document.getElementById("todo")
var indexToEdit = 0
showList()
function addTodo() {

    if (inputElement.value === '') {
        alert("please write something!")
        return
    }

    todos.push(inputElement.value)
    localStorage.setItem("todos", JSON.stringify(todos))
    inputElement.value = ""
    showList()
}

function showList() {
    var listItems = document.getElementById("todo-list")

    listItems.innerHTML = ""
    for (var i = 0; i < todos.length; i++) {
        listItems.innerHTML += `<li> ${todos[i]} <button onclick="deleteTodo(${i})">Delete </button> <button onclick="editTodo(${i})">Edit </button> </li>`
    }
}


function deleteTodo(index) {
    todos.splice(index, 1)
    showList()
}

function editTodo(index) {
    updateButton.style.display = 'inline-block'
    addButton.style.display = "none"

    inputElement.value = todos[index]
    indexToEdit = index
}

function updateTodo() {
    updateButton.style.display = 'none'
    addButton.style.display = "inline-block"

    todos[indexToEdit] = inputElement.value

    inputElement.value = ''
    showList()

}
