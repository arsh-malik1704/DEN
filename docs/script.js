const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const themeBtn = document.getElementById("theme-toggle");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let theme = localStorage.getItem("theme") || "light";

// Apply saved theme
document.body.classList.toggle("dark", theme === "dark");
themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";

// Load tasks from localStorage
window.onload = () => {
  tasks.forEach(task => createTaskElement(task.text, task.completed));
};

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    input.classList.add("shake");

    // Remove shake effect after animation ends
    setTimeout(() => {
      input.classList.remove("shake");
    }, 300);

    return;
  }

  createTaskElement(taskText, false);
  tasks.push({ text: taskText, completed: false });
  saveTasks();
  input.value = "";
});


// Theme Toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "☀️" : "🌙";
});

// Create Task Element
function createTaskElement(text, completed) {
  const li = document.createElement("li");
  li.className = "task-item";
  if (completed) li.classList.add("completed");

  li.innerHTML = `
    <span>${text}</span>
    <div class="task-buttons">
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  // Complete Button
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTaskStatus(text);
  });

  // Delete Button
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    deleteTask(text);
  });

  taskList.appendChild(li);
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update task status in localStorage
function updateTaskStatus(taskText) {
  tasks = tasks.map(task =>
    task.text === taskText ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
}

// Delete task from localStorage
function deleteTask(taskText) {
  tasks = tasks.filter(task => task.text !== taskText);
  saveTasks();
}