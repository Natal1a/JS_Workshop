document.addEventListener("DOMContentLoaded", function() {

  //variables for buttons and task list:
  let addTaskButton = document.getElementById("addTaskButton");
  let removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");
  let taskList = document.getElementById("taskList");
  let taskListArray = []; //variable for objects with data from inputs

  //create span for tasks counter and add on top of list:
  let taskCount = 0;
  let spanCounter = document.createElement("span");
  let taskListUl = taskList.querySelector("ul");
  taskList.insertBefore(spanCounter, taskListUl);

  //function sets and updates task couner:
  function updateCounter(taskCount) {
    spanCounter.innerText = `You have ${taskCount} task(s) to do`;
  }
  updateCounter(taskCount);

  //add event on addTask and removeFinishedTasks buttons:
  addTaskButton.addEventListener("click", addTask);
  removeFinishedTasksButton.addEventListener("click", removeFinishedTasks);

  function addTask() {
    let taskInput = document.getElementById("taskInput");
    let priorityInput = document.getElementById("priorityInput");

    if (taskInput.value.length <= 5) { //check if task is longer than 5
      alert("Task is to short");
      taskInput.value = '';
    } else if (taskInput.value.length > 100) { //check if task isn't longer than 100
      alert("Task is to long");
      taskInput.value = '';
    } else {
      let listElement = taskList.querySelectorAll("li"); //variable for li elements
      if (listElement[0]) { // if there is a task list, remove all elements from the list
        for (let i = 0; i < listElement.length; i++) {
          taskList.removeChild(listElement[i]);
        }
      };

      let sortedArray = createSortedTasksArray(taskInput, priorityInput); //get sorted task array
      if (sortedArray) { //if array of task list isn't empty create li element for each task
        sortedArray.forEach(function(el) {
          taskList.appendChild(createListElement(el.task, el.priority)); //add li elements to list
        });
      }
      taskInput.value = ''; //clear input value
      priorityInput.value = '1';

      taskCount++;
      updateCounter(taskCount); //update task counter

      //variables for task's buttons:
      let deleteTaskButtons = taskList.querySelectorAll(".deleteTask");
      let taskCompletedButtons = taskList.querySelectorAll(".taskCompleted");

      //add events on task's buttons:
      deleteTaskButtons.forEach(function(btn) {
        btn.addEventListener("click", deleteTask);
      })

      taskCompletedButtons.forEach(function(btn) {
        btn.addEventListener("click", markAsCompleted);
      })

    }
  }

  //function creates task li element, h1 dataset alows to remove objects from task's array:
  function createListElement(task, priority) { //arguments from inputs
    let newTask = document.createElement("li");
    newTask.innerHTML = `
      <h1 data-priority=${priority} data-task = ${task}>${priority} - ${task}</h1>
      <button class="deleteTask">Delete</button>
      <button class="taskCompleted">Completed</button>`
    return newTask;
  }

  //function collects data from inputs:
  function createSortedTasksArray(taskForArray, priorityForArray) {
    taskListArray.push({task: taskForArray.value, priority: priorityForArray.value}); //push data as object to array
    taskListArray.sort(function(a, b) { //sort in order of priority of tasks
      return b.priority - a.priority;
    })
    return taskListArray
  }

  //function removes task object from taskListArray and li element from DOM:
  function deleteTask() {
    let li = this.parentElement;
    let h1 = li.querySelector("h1");
    removeListElementsFromArray(h1);
    li.parentElement.removeChild(li);
    taskCount--;
    updateCounter(taskCount);
  }

  //function removes task object from taskListArray
  function removeListElementsFromArray(listElementH1) {
    for (let i = 0; i < taskListArray.length; i++) {
      if (taskListArray[i].task === listElementH1.dataset.task && taskListArray[i].priority === listElementH1.dataset.priority) {
        taskListArray.splice(i, 1)
      }
    }
  }

  //function toggles class "done" (mark/unmark task as completed) and updates tasks counter:
  function markAsCompleted() {
    let li = this.parentElement;
    li.classList.toggle("done");
    if (li.classList.contains("done")) {
      taskCount--;
      updateCounter(taskCount);
    } else {
      taskCount++;
      updateCounter(taskCount);
    }
  }

  //function removes all tasks with class "done"
  function removeFinishedTasks() {
    let taskListElements = Array.prototype.slice.call(taskList.children);
    taskListElements.forEach(function(task) {
      if (task.classList.contains("done")) {
        let h1 = task.querySelector("h1");
        removeListElementsFromArray(h1);
        taskList.removeChild(task);
      }
    });
  }
});
