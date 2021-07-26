///Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

///Event Listeners
///document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', DeleteCheck);
filterOption.addEventListener('click', filterTodo);

///Functions
///ADD A TO DO
function addTodo(event){
    ///prevent form from submitting
    event.preventDefault();
    ///Todo DIV
    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');
    ///Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    ///ADD TO DO TO LOCAL STORAGE
    ///saveLocalTodos(todoInput.value);
    ///CHECK MARK BUTTON 
    const completedButton = document.createElement('button');  completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
     ///TRASH BUTTON 
     const trashButton = document.createElement('button');  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-button");
     todoDiv.appendChild(trashButton);
     ///APPEND TO LIST
     todoList.appendChild(todoDiv);
     ///CLEAR TO DO INPUT VALUE 
     todoInput.value="";
}
///DELETE OR CHECK A TO DO 
function DeleteCheck(e){
    const item = e.target;
    ///DELETE
    if(item.classList[0]==='trash-button'){
          const todo=item.parentElement;
          ///animation
          todo.classList.add("fall");
          ///removal
         ///removeLocalTodos(todo);
          todo.addEventListener('transitionend',function(){
              todo.remove();
          })
    }
   ///CHECKMARK
   if(item.classList[0]==='complete-button'){
       const todo = item.parentElement;
       todo.classList.toggle('completed');
   }
}
/// FILTER BY STATUS: COMPLETED, NOT COMPLETED, ALL
function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
        todo.style.display='flex';  
        break;
        case "completed":
          if(todo.classList.contains('completed')){
           todo.style.display='flex'; 
         }else{
             todo.style.display="none";
         }
        break;
         case "uncompleted":
            if(!todo.classList.contains('completed')){
                todo.style.display='flex'; 
              }else{
                todo.style.display="none";
            }
        break;
    }
})
}
///SAVING IN THE LOCAL STORAGE
//--
/*
function saveLocalTodos(todo){
  ///VERIFYING IF WE ALREADY HAVE A TODO LIST IN THE LCOAL STORAGE
  let todos;
  if(localStorage.getItem('todos')===null){
      todos=[];
  }else{
      todos= JSON.parse(localStorage.getItem('todos'));
  }
todos.push(todo);
localStorage.setItem('todos', JSON.stringify(todos));
}
//--
function getTodos(){
     ///VERIFYING IF WE ALREADY HAVE A TODO LIST IN THE LCOAL STORAGE
    let todo;
  if(localStorage.getItem('todos')===null){
      todos=[];
  }else{
      todos= JSON.parse(localStorage.getItem('todos'));
  }
todos.push(todo);
localStorage.setItem('todos', JSON.stringify(todos));
todos.forEach(function(todo){
    ///Todo DIV
    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');
    ///Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText=todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    ///CHECK MARK BUTTON 
    const completedButton = document.createElement('button');  completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
     ///CHECK TRASH BUTTON 
     const trashButton = document.createElement('button');  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-button");
     todoDiv.appendChild(trashButton);
     ///APPEND TO LIST
     todoList.appendChild(todoDiv);
})
}

function removeLocalTodos(){
     ///VERIFYING IF WE ALREADY HAVE A TODO LIST IN THE LCOAL STORAGE
  let todos;
  if(localStorage.getItem('todos')===null){
      todos=[];
  }else{
      todos= JSON.parse(localStorage.getItem('todos'));
  }
  
}*/