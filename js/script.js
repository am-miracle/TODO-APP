const todoInput = document.querySelector('#todo-input');

const todos = [];
todoInput.addEventListener("keyup", (e) => {
    //add todos
    if (e.key === "Enter" || e.keyCode === 13){
        todos.push(e.target.value);
        newTodo(e.target.value);
        todoInput.value = "";
    }
});

function newTodo(value){
    const todo = document.createElement("div");
    const todoText = document.createElement("p");
    const todoCheckBox = document.createElement("input");
    const todoCheckBoxLabel = document.createElement("label");
    const todoCross = document.createElement("span");
    const todosContainer = document.querySelector(".todos");
    // const svg = document.querySelector(".svg");

    
    todoText.textContent = value;
    todoCheckBox.type = "checkbox";
    todoCheckBoxLabel.type = "checkbox";
    
    todoCheckBoxLabel.htmlFor = "checkbox";
    todoCheckBoxLabel.addEventListener("click", (e) => {
        if(todoCheckBox.checked){
            todoCheckBox.checked = false;
            todoText.style.textTransform = "none";
            todoCheckBoxLabel.classList.remove("active");
        }
        else{
            todoCheckBox.checked = false;
            todoText.style.textTransform = "line-through";
            todoCheckBoxLabel.classList.add("active");
        }
    });

    todoCross.textContent = "X";
    todoCross.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    });

    todo.classList.add("todo");
    todoCheckBoxLabel.classList.add("circle");
    todoCross.classList.add("cross");

    todo.appendChild(todoCheckBox);
    todo.appendChild(todoCheckBoxLabel);
    todo.appendChild(todoText);
    todo.appendChild(todoCross);

    todosContainer.appendChild(todo);
}
function changeTheme(){
    document.body.classList.toggle("light");
}