document.addEventListener("DOMContentLoaded", () => {
  // Grab references to the form and the list container
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  // Listen for the form’s submit event
  form.addEventListener("submit", (event) => {
    // Prevent the default action (page refresh)
    event.preventDefault();

    // Get the text the user typed, trimming off extra spaces
    const taskInput = document.querySelector("#new-task-description");
    const taskText = taskInput.value.trim();

    // Only create a task if the field isn’t empty
    if (taskText !== "") {
      // Make a new <li> element and put the task text inside it
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      // Build a small “delete” button so the user can remove the task later
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.marginLeft = "10px";
      deleteButton.style.cursor = "pointer";  //pointer cursor

      // When the delete button is clicked, remove the entire list item
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });

      // Attach the delete button to the <li>
      taskItem.appendChild(deleteButton);

      // Finally, add the new task to the visible task list
      taskList.appendChild(taskItem);

      // Clear the input box so it’s ready for the next task
      taskInput.value = "";
    }
  });
});

