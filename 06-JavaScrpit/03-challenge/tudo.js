// DOM Elements
const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");
const filterBtns = document.querySelectorAll(".filter-btn");
const countWork = document.getElementById("countWork");
const countPersonal = document.getElementById("countPersonal");

// Load from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "All";

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
  todoList.innerHTML = "";

  const filteredTasks =
    currentFilter === "All"
      ? tasks
      : tasks.filter(task => task.category === currentFilter);

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleComplete(task.id));

    // Text
    const span = document.createElement("span");
    span.textContent = task.text;

    // Category
    const categorySpan = document.createElement("span");
    categorySpan.className = "category";
    categorySpan.textContent = `[${task.category}]`;

    // Delete
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(categorySpan);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });

  updateCounts();
}

// Add task
function addTask() {
  const text = taskInput.value.trim();
  const category = categorySelect.value;

  if (!text) return alert("Please enter a task");

  tasks.push({
    id: Date.now(), // UNIQUE ID
    text,
    category,
    completed: false
  });

  taskInput.value = "";
  saveTasks();
  renderTasks();
}

// Toggle complete
function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// Filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.category;
    renderTasks();
  });
});

// Update counts
function updateCounts() {
  const work = tasks.filter(t => t.category === "Work").length;
  const personal = tasks.filter(t => t.category === "Personal").length;

  countWork.textContent = `Work: ${work}`;
  countPersonal.textContent = `Personal: ${personal}`;
}

// Events
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", e => {
  if (e.key === "Enter") addTask();
});

// Initial render
renderTasks();
