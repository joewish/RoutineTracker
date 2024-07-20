const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");
const url = "https://routinetracker-cajx.onrender.com/tracker"
function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    console.log("no task added");
    return;

  }
  postToDB(task)
  inputBox.value = " ";
  location.reload()
  //fetchtask()
  // const li = document.createElement("li");
  // li.innerHTML = `
  //   <label>
  //     <input type="checkbox">
  //     <span>${task}</span>
  //   </label>
  //   <span class="edit-btn">Edit</span>
  //   <span class="delete-btn">Delete</span>
  //   `;

  // listContainer.appendChild(li);

  // // clear the input field
 

  // // attach event listeners to the new task
  // const checkbox = li.querySelector("input");
  // const editBtn = li.querySelector(".edit-btn");
  // const taskSpan = li.querySelector("span");
  // const deleteBtn = li.querySelector(".delete-btn");

  // // strike out the completed task
  // checkbox.addEventListener("click", function () {
  //   li.classList.toggle("completed", checkbox.checked);
  //   updateCounters();
  // });

  // editBtn.addEventListener("click", function () {
  //   const update = prompt("Edit task:", taskSpan.textContent);
  //   if (update !== null) {
  //     taskSpan.textContent = update;
  //     li.classList.remove("completed");
  //     checkbox.checked = false;
  //     updateCounters();
  //   }
  // });

  // deleteBtn.addEventListener("click", function () {
  //   if (confirm("Are you sure you want to delete this task?")) {
  //     li.remove();
  //     updateCounters();
  //   }
  // });
  // updateCounters();
}

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('#list-container input[type="checkbox"]');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      handleCheckboxChange(this);
    });
  });
});

function handleCheckboxChange(checkbox) {
  const taskId = checkbox.getAttribute('data-task-id');
  if (checkbox.checked) {
    // Call the function you want to trigger when checkbox is checked
    postActivityStatus(taskId)
  } else {
    // Call the function you want to trigger when checkbox is unchecked
    onCheckboxUnchecked(taskId);
  }
}

function onCheckboxChecked(taskId) {
  console.log(`Task with ID ${taskId} is checked.`);
  // Add your logic here
}

function onCheckboxUnchecked(taskId) {
  console.log(`Task with ID ${taskId} is unchecked.`);
  // Add your logic here
}


// add task when pressing Enter key
inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function postToDB(taskName) {
  const task = {
    name: taskName
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task) // Convert the data object to a JSON string
  })
  .then(response => response.json().then(data => ({
    status: response.status,
    body: data
  })))
  .then(({ status, body }) => {
    if (status === 200) {
      alert(`${body.body} task has been created`); // Display success message
      window.location.reload(); // Reload the page
    }
    return { status, body }; // Return the response data
  })
  .catch(error => {
    alert(error.message); // Display error message
    throw error; // Rethrow the error to be handled by the caller
  });
}


function postActivityStatus(taskID){
  const taskId = {
    taskId: taskID
  }
  fetch(url+"/toggleActivityStatus", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskId) // Convert the data object to a JSON string
})
location.reload()
}