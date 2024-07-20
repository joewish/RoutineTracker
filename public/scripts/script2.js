const url = "https://routinetracker-cajx.onrender.com/tracker"
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the parent container
  var taskContainer = document.getElementById('task-container');
  if (taskContainer) {
    taskContainer.addEventListener('change', function (event) {
      // Check if the event was triggered by an input with class 'form-check-input'
      if (event.target && event.target.classList.contains('form-check-input')) {
        // Traverse the DOM to get the respective row name
        var checkbox = event.target;
        var row = checkbox.closest('.row');
        if (row) {
          var taskNameDiv = row.querySelector('.col-4');
          if (taskNameDiv) {
            var taskName = taskNameDiv.textContent.trim();
            var month = checkbox.getAttribute('data-month');
            var day = checkbox.getAttribute('data-day');
            console.log(event.target.checked)
            console.log(month,day)
            postToDBForTaskTracking(taskName,event.target.checked, month+day)
          } else {
            console.error('Task name div not found.');
          }
        } else {
          console.error('Row not found.');
        }
      }
    });
  } else {
    console.error('Element with ID "task-container" not found.');
  }
});



function postToDBForTaskTracking(taskName,taskStatus,monthDay){
    const task = {
      name: taskName,
      status: taskStatus,
      dayMonth: monthDay
    }
    fetch(url+"/addTaskStatus", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(task) // Convert the data object to a JSON string
  })
  }
