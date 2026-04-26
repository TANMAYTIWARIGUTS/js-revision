/**
 * A comprehensive Task Management System demonstration.
 * Demonstrates: Classes, Async/Await, Higher-order functions, and Error handling.
 */

// 1. Data Structure using a Class
class Task {
    constructor(id, title, priority = 'Medium') {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.completed = false;
        this.createdAt = new Date();
    }

    toggleComplete() {
        this.completed = !this.completed;
        console.log(`Task "${this.title}" is now ${this.completed ? 'Done' : 'Pending'}.`);
    }
}

// 2. Manager Class for handling Logic
class TaskManager {
    constructor(owner) {
        this.owner = owner;
        this.tasks = [];
    }

    // Adding a new task
    addTask(title, priority) {
        const id = Math.floor(Math.random() * 10000);
        const newTask = new Task(id, title, priority);
        this.tasks.push(newTask);
        return newTask;
    }

    // Filtering tasks using Array methods
    getPendingTasks() {
        return this.tasks.filter(task => !task.completed);
    }

    // Asynchronous simulation to "sync" tasks with a server
    async syncWithServer() {
        console.log("Starting sync...");
        try {
            // Simulating a network request with a Promise
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const summary = this.tasks.map(t => t.title).join(', ');
            console.log(`Successfully synced ${this.tasks.length} tasks: [${summary}]`);
            return true;
        } catch (error) {
            console.error("Failed to sync tasks:", error);
            return false;
        }
    }

    // Complex data transformation
    getStats() {
        return this.tasks.reduce((stats, task) => {
            stats[task.priority] = (stats[task.priority] || 0) + 1;
            if (task.completed) stats.completedCount++;
            return stats;
        }, { High: 0, Medium: 0, Low: 0, completedCount: 0 });
    }
}

// 3. Execution Logic (Main Execution)
const runDemo = async () => {
    const myManager = new TaskManager("Developer");

    console.log(`--- Initializing System for ${myManager.owner} ---`);

    // Add some initial data
    myManager.addTask("Refactor API module", "High");
    myManager.addTask("Update documentation", "Low");
    const testTask = myManager.addTask("Fix login bug", "High");

    // Perform operations
    testTask.toggleComplete();

    // Show stats
    const currentStats = myManager.getStats();
    console.log("Current System Stats:", currentStats);

    // Filtered view
    const pending = myManager.getPendingTasks();
    console.log(`You have ${pending.length} pending tasks left.`);

    // Perform Async Sync
    const isSuccess = await myManager.syncWithServer();
    
    if (isSuccess) {
        console.log("System Check: All operations completed successfully.");
    }
};

// Start the application
runDemo();
