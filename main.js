import Task from "./task.js";

let createTask = document.querySelector(".btn");
let newTaskDiv = document.querySelector(".task-create");
let taskContainer = document.querySelector(".task-container");

let tasks = [];

function renderTasks(tasks) {
    if (taskContainer.querySelector("div")) {
        taskContainer.querySelector("div").remove();
    }
    let div = document.createElement("div");
    let list = document.createElement("ul");
    tasks.forEach(element => {
        let listElement = document.createElement("li");
        listElement.textContent = element.name;
        if (element.completed) {
            let complete = document.createElement("strike");
            complete.appendChild(listElement);
            list.appendChild(complete);
        } else {
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.addEventListener("click", ()=>{
                element.complete();
                renderTasks(tasks);
            });
            
            listElement.appendChild(checkBox);
            list.appendChild(listElement);
        }
    });
    div.appendChild(list);
    taskContainer.appendChild(div);
}

renderTasks(tasks);

createTask.addEventListener("click", () => {
    createTask.style.display = "None";

    var createform = document.createElement('form');
    newTaskDiv.appendChild(createform);

    var texareaelement = document.createElement('textarea');
    texareaelement.setAttribute("id", "dmessage");
    createform.appendChild(texareaelement);

    var messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);

    var submitelement = document.createElement('button');
    submitelement.setAttribute("id", "dsubmit");
    submitelement.innerHTML = "Add Notes";

    submitelement.addEventListener("click", function (e) {
        e.preventDefault();
        let note = document.querySelector("#dmessage");
        let t = note.value;
        let task = new Task(t);
        tasks.push(task);
        renderTasks(tasks);
        newTaskDiv.removeChild(createform);
        createTask.style.display = "block";
    });

    createform.appendChild(submitelement);

});


