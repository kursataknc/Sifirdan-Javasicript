// Tüm ELmentleri Seçme 
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {   // tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clerAllTodos);
}


function clerAllTodos(e) {
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        //  Arayüzden todoları silme
        // yavaş yöntem todoList.InnerHTML = ""; 
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");


    }


}




function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            //Bulamıyor demektir 
            listItem.setAttribute("style", "display:none !important");

        }
        else {
            listItem.setAttribute("style", "display:block");
        }
    });
}


function deleteTodo(e) {

    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo başarıyla silindi...");
    }
}

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1); // arraydan değeri silebiliriz.
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));

}




function loadAllTodosToUI() {

    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}



function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        /* <div class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> is a danger alert—check it out! */ // mesaj ekleme 
        showAlert("danger", "Lütfen bir todo girin...");

    }
    else {
        addTodoToUI(newTodo);
        addTodoStorage(newTodo);

        showAlert("success", "Todo başarıyla eklendi...")
    }

    e.preventDefault();
}

function getTodosFromStorage() {  // storageden Todoları Alma 
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}


function showAlert(type, message) {

    const alert = document.createElement("div");

    alert.className = ` alert alert-${type}`;

    alert.textContent = message;

    firstCardBody.appendChild(alert);

    // Set Timeout

    setTimeout(function () {
        alert.remove();

    }, 1000);


}

function addTodoToUI(newTodo) {    // String değerini list item olarak UI ' ya ekleyecek 
    // <li class="list-group-item d-flex justify-content-between">
    //     Todo 1
    //     <a href="#" class="delete-item">
    //         <i class="fa fa-remove"></i>
    //     </a>

    // </li>

    // List Oluşturma 
    const listItem = document.createElement("li");
    // Link OLuşturma 
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = " <i class='fa fa-remove'></i>";


    listItem.className = "list-group-item d-flex justify-content-between";

    // text Node ekleme 

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);


    // Todo Liste ekleme 

    todoList.appendChild(listItem);


    console.log(listItem);
    todoInput.value = "";
}