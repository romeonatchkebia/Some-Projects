
const input = document.querySelector("#input");
const addBtn = document.querySelector("#plus-btn");
const listContainer = document.querySelector("#list-container");

let addedTasksArray = [];


// list rendering function
const listRenderer = (item) => {
  return `<div class="list-text-buttons">
    <div>
        <p>${item}</p>
    </div>

    <div class="list-item">
        <button class="delete"><img class="list-images" src="./asset/trash.png" alt="trash"></button>
            
        <button class="done"><img class="list-images" src="./asset/done.png" alt="done"></button>
    </div>                  
  </div>
  `;
};


// add tasks to the list
const addTasksToList = () => {

    addBtn.addEventListener("click", () => {
      let task = input.value;
      if (task !== "") {
        addedTasksArray.push(task);
        listContainer.innerHTML = addedTasksArray.map((task) => listRenderer(task)).join("");
        input.value = "";
        deleteTask();
        addToCompleted();
      } else {
        alert("put some text inside the box");
      }
    });
};

addTasksToList();



// remove tasks from the list
const deleteTask = () => {
    const deleteBtn = document.querySelectorAll('.delete');
    const listContainer = document.querySelector("#list-container");
    
    deleteBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        addedTasksArray.splice(index, 1);
        listContainer.innerHTML = addedTasksArray.map((task) => listRenderer(task)).join("");
        deleteTask();
        addToCompleted();
      });
    });
};




let completedTasksArray = [];

//comleted tasks renderer
const comTaskRender = (item) => {
    return `

    <div class="completed-tasks">
        <ul>
            <li>${item}</li>
        </ul>
    </div>`
};


//add to copmleted list function
const addToCompleted = () => {
    const doneBtn = document.querySelectorAll(".done");
    const completedDiv = document.getElementById("completed");
    
    doneBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            completedTasksArray.push(addedTasksArray[index]);
            console.log(completedTasksArray);
            addedTasksArray.splice(index, 1);
            listContainer.innerHTML = addedTasksArray.map((item) => listRenderer(item)).join("");
            completedDiv.innerHTML = completedTasksArray.map((item) => comTaskRender(item)).join("");
            addToCompleted();
            deleteTask();
        }) 
    })
    
};

addToCompleted();