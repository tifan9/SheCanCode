//create a task manager where user can add, remove, and mark tasks as completed
const taskManager = []

const addTask = (task) =>{
    return taskManager.push(task)
}
addTask("addtask")
addTask("addtask2")
addTask("addtask3")
console.log(taskManager)
// a: add task to task list
// b: remove task from task list
const removeTask = () => {
    return taskManager.pop()
}
removeTask(taskManager)
console.log(taskManager)
// d: sort task alphabetical
const sortTask = () => {
    return taskManager.sort()
}
sortTask(taskManager)
console.log(taskManager)
// E: display number of incomple tasks
const displayNumber = () => {
    return taskManager.length
}
displayNumber(taskManager)
console.log(taskManager)


















