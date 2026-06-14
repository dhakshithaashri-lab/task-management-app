function addTask(){

let taskInput =
document.getElementById("taskInput");

let taskList =
document.getElementById("taskList");

if(taskInput.value===""){
alert("Enter a task");
return;
}

let li =
document.createElement("li");

li.textContent =
taskInput.value;

li.onclick = function(){
li.remove();
}

taskList.appendChild(li);

taskInput.value="";
}
