const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const location = event.target.parentElement;
    location.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(location.id));
    saveToDos();
}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem("todos");
let toDos = [];


function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

if (savedToDos != null){
    const parsedToDos = JSON.parse(localStorage.getItem("todos"));
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
