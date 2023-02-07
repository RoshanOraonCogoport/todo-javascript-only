var tasks = JSON.stringify(localStorage.getItem('tasks'))
if(tasks=="null"){
    tasks=[];
}
else{
    tasks=tasks.substring(1,tasks.length-1).split(',');

    var tasks_list = document.getElementById("task-list");
    tasks_list.innerHTML = "";
    tasks.forEach(task => {
        tasks_list.innerHTML += '• '+`<input style="margin-right: 10px; margin-left: 10px" type="checkbox" id="myCheck" onclick="myFunction('${task}')">` + task 
        + `<button class="bum" onclick = "DeleteToDo('${task}')">Delete</button><br>`;

    })
}

console.log(tasks);

function addToDo() {
    var task = document.getElementById('task').value;
    tasks.push(task);
    var tasks_list = document.getElementById("task-list");
    tasks_list.innerHTML = "";
    tasks.forEach((task,i) => {
        tasks_list.innerHTML += '• '+`<input style="margin-right: 10px; margin-left: 10px" type="checkbox" id="myCheck" onclick="myFunction('${task}')">` + task 
        + `<button class="bum" onclick = "DeleteToDo('${i}')">Delete</button><br>`;

    })
    document.getElementById('task').value = "";
    localStorage.setItem("tasks",tasks);
    console.log(tasks);
}
//for deletion
function DeleteToDo(i) {

    
    tasks = tasks.filter((t,index) => index != i);
    var tasks_list = document.getElementById("task-list");
    tasks_list.innerHTML = "";
    tasks.forEach((task,i) => {
        tasks_list.innerHTML += '• '+`<input style="margin-right: 10px; margin-left: 10px" type="checkbox" id="myCheck" onclick="myFunction('${task}')">`+ task
        + `<button class="bum" onclick = "DeleteToDo('${i}')">Delete</button><br>`;
    })

    if(tasks=="null"){
        localStorage.removeItem("tasks");
    }
    else{
        localStorage.setItem("tasks",tasks);
    }
    
    console.log(tasks);
}

function myFunction(task) {
    var checkBox = document.getElementById("myCheck");

    if (checkBox.checked == true){
        checkBox.style.display = "none";
    } else {
        checkBox.style.display = "block";
    }
  }


function SearchTab(){
    var s = document.getElementById('searchbox').value;
    if(s != ""){
        var task_list = document.getElementById("task-list");
        task_list.innerHTML = "";
        tasks.map((task) =>{
            if(task.includes(s)){
                task_list.innerHTML += '• '+`<input style="margin-right: 10px; margin-left: 10px" type="checkbox" id="myCheck" onclick="myFunction('${task}')">`
                +  task + `<button class="bum" onclick = "DeleteToDo('${task}')">Delete</button><br>`;

            }

        })
    }else{
        var task_list = document.getElementById("task-list");

        task_list.innerHTML = "";
        tasks.forEach((task,i) => {
            task_list.innerHTML += '• '+`<input style="margin-right: 10px; margin-left: 10px" type="checkbox" id="myCheck" onclick="myFunction('${task}')">`
            +  task + `<button class="bum" onclick = "DeleteToDo('${task}')">Delete</button><br>`;

        })
    }


}

