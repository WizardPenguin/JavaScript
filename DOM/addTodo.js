const addTodoBtn = document.querySelector(".form-todo .btn-todo")
const todoTextInput = document.querySelector(".form-todo input[type='text']")
console.log(todoTextInput)
const todoList = document.querySelector(".section-todo .list-todo")
console.log(todoList)
// we need to add functionality to remove,done buttons 
// for that we are going to add eventListner to parent, means todoList so it can listen to any of remove,done evens
addTodoBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const newNode = document.createElement("li")
    newNode.classList.add("todo-item")
    newNode.innerHTML = `<div class="text">${todoTextInput.value}</div>
    <div class="todo-btn">
        <button class="btn done">
            <i class="fas fa-clipboard-list"></i>
        </button>
        <button class="btn remove">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>`
    todoTextInput.value = ""
    todoList.append(newNode)
})
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        console.log(e.target.parentNode.previousElementSibling)
        e.target.parentNode.previousElementSibling.style.textDecoration = "line-through"
    }
    else if(e.target.classList.contains("remove")){
        e.target.parentNode.parentNode.remove()
    }
})