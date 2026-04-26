/**
 * Task Manager Application
 * Features: LocalStorage Persistence, UI Updates, Task Filtering
 */

class Task {
  constructor(id, description, completed = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
    this.createdAt = new Date().toISOString();
  }
}

class TaskApp {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.initUI();
  }

  // Add a new task
  addTask(description) {
    if (!description.trim()) return;
    const newTask = new Task(Date.now(), description);
    this.tasks.push(newTask);
    this.saveAndRender();
  }

  // Toggle completion status
  toggleTask(id) {
    this.tasks = this.tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.saveAndRender();
  }

  // Remove a task
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveAndRender();
  }

  // Save to LocalStorage and update the view
  saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.render();
  }

  // Basic DOM Rendering
  render() {
    const listContainer = document.getElementById('task-list');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    this.tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : '';
      li.innerHTML = `
        <span>${task.description}</span>
        <button onclick="app.toggleTask(${task.id})">Done</button>
        <button onclick="app.deleteTask(${task.id})">Delete</button>
      `;
      listContainer.appendChild(li);
    });
  }

  initUI() {
    document.addEventListener('DOMContentLoaded', () => this.render());
  }
}

// Instantiate the application
const app = new TaskApp();
