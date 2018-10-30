const {Task, priorityLevels} = require('./components/Task/Task');
const Project = (name)=>{
    let taskList = [];

    let addTask = (description, date = Date.now(), priority = priorityLevels.NORMAL )=>{
        let task = Task(description,date,priority);
        taskList.push(task);
        return task;
    };

    let removeTask = (Task)=>taskList.splice(taskList.indexOf(Task),1);

    let tasks = ()=>[...taskList];
    let taskDescriptions = ()=>taskList.map((task)=>task.description);

    return {addTask,name, removeTask, tasks, taskDescriptions}
};

module.exports = {
    Project:Project
};