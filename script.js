/**
 * Task Management System
 * Demonstrates: Classes, Async/Await, Array Methods, and Object Destructuring
 */

class Task {
    constructor(id, title, priority = 'Medium') {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.completed = false;
        this.createdAt = new Date();
    }

    toggleStatus() {
        this.completed = !this.completed;
        console.log(`Task "${this.title}" is now ${this.completed ? 'Done' : 'Pending'}.`);
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Add a new task with a simulated network delay
    async addTask(title, priority) {
        console.log("Saving task to server...");
        return new Promise((resolve) => {
            setTimeout(() => {
                const newTask = new Task(Date.now(), title, priority);
                this.tasks.push(newTask);
                resolve(newTask);
            }, 1000);
        });
    }

    // Filter tasks based on priority
    getTasksByPriority(level) {
        return this.tasks.filter(task => task.priority === level);
    }

    // Generate a summary report using reduce
    getStats() {
        return this.tasks.reduce((stats, task) => {
            stats.total++;
            if (task.completed) stats.completed++;
            return stats;
        }, { total: 0, completed: 0 });
    }

    displayAll() {
        console.log("--- Current Tasks ---");
        this.tasks.forEach(({ title, priority, completed }) => {
            console.log(`[${completed ? 'X' : ' '}] ${title} (${priority})`);
        });
    }
}

// Execution Logic
async function runDemo() {
    const manager = new TaskManager();

    // Adding tasks asynchronously
    await manager.addTask("Learn JavaScript", "High");
    await manager.addTask("Write Clean Code", "Medium");
    await manager.addTask("Deploy Application", "High");

    // Interacting with the tasks
    if (manager.tasks.length > 0) {
        manager.tasks[0].toggleStatus();
    }

    // Output findings
    // manager.displayAll();
    // const highPriority = manager.getTasksByPriority("High");
    // console.log(`High Priority Tasks: ${highPriority.length}`);
    
    // const stats = manager.getStats();
    // console.log(`Completion Rate: ${stats.completed}/${stats.total}`);
}

runDemo().catch(err => console.error(err));
