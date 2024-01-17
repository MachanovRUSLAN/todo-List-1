const Task = document.querySelector("#addTask");
const InputValue = document.querySelector("#todoSearch");
const Button = document.querySelector("#addButton");
const addList = document.querySelector(".newtask");
const listGroup = document.querySelector(".lister");
const cont = document.querySelector(".container")

runEvents()

function runEvents(){
   Task.addEventListener("submit", addTodo);
   cont.addEventListener("click", clearTodo)
}

function addTodo(e){
    
    const InputText = InputValue.value.trim();
    if(InputText == ""){
       alert("add something")
    }else{
        todoUI(InputText)
    }
    InputValue.value ="";
  e.preventDefault()
}




function todoUI(newTodo){
//    
 
const li = document.createElement("li");
li.className = "list";
li.textContent = (newTodo)


const a = document.createElement("a");
a.href = "#";
a.className= "delete";

const i = document.createElement("i");
i.className = "fa fa-trash";

li.appendChild(a);
a.appendChild(i);
listGroup.appendChild(li)
}

function clearTodo(e){
    if( e.target.className == "fa fa-trash"){
      const todo = e.target.parentElement.parentElement;
        todo.remove();
    }
}
