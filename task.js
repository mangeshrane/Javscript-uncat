export default class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        this.completed = true;
        console.log("Task completed");
    }
    save() {
        console.log("Saving Task");
    }
}


