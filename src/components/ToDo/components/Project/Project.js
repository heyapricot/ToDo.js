const {Task, priorityLevels} = require('./components/Task/Task');
const Project = (name)=>{
    let tasks = (()=>{
        let list = [];
        let descriptions = ()=>{
            return list.map((task)=>{
                return task.description
            });
        };
        return {list,descriptions}
    })();
    let addTask = (description, date = Date.now(), priority = priorityLevels.NORMAL )=>{
        tasks.list.push(Task(description,date,priority));
    };
    return {addTask,name,tasks}
};

module.exports = {
    Project:Project
};