document.getElementById("task-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const taskInput = document.getElementById("task-input");
    const prioritySelect = document.getElementById("priority-select");
    const deadlineInput = document.getElementById("deadline-input");
  
    const task = {
      name: taskInput.value,
      priority: prioritySelect.value,
      deadline: deadlineInput.value
    };
  
    if (task.name.trim() === "") {
      alert("Please enter a task.");
      return;
    }
  
    addTask(task);
    taskInput.value = "";
    prioritySelect.value = "low";
    deadlineInput.value = "";
  });
  
  function addTask(task) {
    const taskList = document.getElementById("task-list");
  
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
  
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
  
    const taskName = document.createElement("span");
    taskName.textContent = task.name;
  
    const taskPriority = document.createElement("span");
    taskPriority.textContent = `Priority: ${task.priority}`;
  
    const taskDeadline = document.createElement("span");
    taskDeadline.textContent = `Deadline: ${task.deadline}`;
  
    taskDetails.appendChild(taskName);
    taskDetails.appendChild(taskPriority);
    taskDetails.appendChild(taskDeadline);
  
    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskElement.remove();
    });
  
    taskActions.appendChild(deleteButton);
  
    taskElement.appendChild(taskDetails);
    taskElement.appendChild(taskActions);
  
    taskList.appendChild(taskElement);
  }
  