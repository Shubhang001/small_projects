let todo = [];

let req = prompt("Please enter your request");

while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }
    if (req == "list") {
        console.log("------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------");
    } else if (req == "add") {
        let task = prompt("please enter the task to be added");
        todo.push(task);
        console.log("task added");
    } else if (req == "delete") {
        let idx = prompt("please enter index of task to be deleted");
        todo.splice(i, 1);
        console.log("task deleted");
    }

    req = prompt("Please enter your request");
}