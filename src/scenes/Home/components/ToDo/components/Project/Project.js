const {Task, priorityLevels} = require('./components/Task/Task');
const Project = (name)=>{
    let taskList = [];

    let addTask = (description, date = Date.now(), priority = priorityLevels.NORMAL )=>{
        let task = Task(description,date,priority);
        taskList.push(task);
        return task;
    };

    let tasks = ()=>[...taskList];
    let taskDescriptions = ()=>taskList.map((task)=>task.description);

    return {addTask,name,tasks, taskDescriptions}
};

module.exports = {
    Project:Project
};