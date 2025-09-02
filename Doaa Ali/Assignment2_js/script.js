document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", addTask);
  taskList.addEventListener("click", manageTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; 

    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${taskText}</span>
    <div class="actions">
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    </div>
        `;
    taskList.appendChild(listItem);
    taskInput.value = ""; 
  }

  function manageTask(e) {
    const listItem = e.target.closest('li');

    // لو ضغط على زر Complete
    if (e.target.classList.contains('complete-btn')) {
        const actions = listItem.querySelector('.actions');
        actions.innerHTML = `<span class="checkmark">✔</span>`; 
        listItem.classList.add('completed');

    // لو ضغط على زر Delete
    } else if (e.target.classList.contains('delete-btn')) {
        listItem.remove();
    }
}


});
