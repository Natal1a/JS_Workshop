document.addEventListener("DOMContentLoaded", function() {

  //variables for buttons and task list:
  let addTaskButton = document.getElementById("addTaskButton");
  let removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");
  let taskList = document.getElementById("taskList");

  //create span for tasks counter and add on top of list:
  let taskCount = 0;
  let spanCounter = document.createElement("span");
  let taskListUl = taskList.querySelector("ul");
  taskList.insertBefore(spanCounter, taskListUl);

  //function updates task couner:
  function updateCounter(taskCount) {
    spanCounter.innerText = `You have ${taskCount} task(s) to do`;
  }
  updateCounter(taskCount);

  //add events on buttons:
  addTaskButton.addEventListener("click", addTask);
  removeFinishedTasksButton.addEventListener("click", removeFinishedTasks)

  function addTask() {
    let taskInput = document.getElementById("taskInput");
    let priorityInput = document.getElementById("priorityInput");

    let newTask = document.createElement("li");
    if (taskInput.value.length <= 5) { //check if task is longer than 5
      alert("Task is to short");
      taskInput.value = '';
    } else if (taskInput.value.length > 100) { //check if task isn't longer than 100
      alert("Task is to long");
      taskInput.value = '';
    } else { // add new task with buttons to list and update counter:

      newTask.innerHTML = `
        <h1>${taskInput.value}</h1>
        <button class="deleteTask">Delete</button>
        <button class="taskCompleted">Completed</button>`
      taskList.appendChild(newTask);
      taskInput.value = '';
      taskCount++;
      updateCounter(taskCount);

      //variables for task's buttons:
      let deleteTaskButton = newTask.querySelector(".deleteTask");
      let taskCompletedButton = newTask.querySelector(".taskCompleted");

      //add events on task's buttons:
      deleteTaskButton.addEventListener("click", deleteTask);
      taskCompletedButton.addEventListener("click", markAsCompleted);

      //delete task and update counter:
      function deleteTask() {
        newTask.parentElement.removeChild(newTask);
        taskCount--;
        updateCounter(taskCount);
      }

      //mark/unmark task as completed (add/remove class "done") and update counter:
      function markAsCompleted() {
        newTask.classList.toggle("done");
        if (newTask.classList.contains("done")) {
          taskCount--;
          updateCounter(taskCount);
        } else {
          taskCount++;
          updateCounter(taskCount);
        }
      }
    }
  }

  //remove all tasks marked as completed:
  function removeFinishedTasks() {
    let taskListElements = Array.prototype.slice.call(taskList.children);
    taskListElements.forEach(function(task) {
      if (task.classList.contains("done")) {
        taskList.removeChild(task);
      }
    });
  }
});
