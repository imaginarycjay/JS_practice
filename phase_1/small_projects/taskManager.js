function Task(title, priority) {
    Task.counter = Task.counter || 1;  // Static counter
    this.id = Task.counter++;
    this.title = title;
    this.priority = priority;
  }
  
  function Main() {
    this.stack = [];
  
    this.addStack = (task) => {
      this.stack.push(task);
      console.log(`added: ${task.title} (${task.priority} Priority)`);
    };
  }
  
  const task1 = new Main();
  task1.addStack(new Task("Learning JS", "High"));
  task1.addStack(new Task("Learning Python", "Low"));
  task1.addStack(new Task("Learning Node.js", "Medium"));
  
  console.log(task1);  