const Project = (name)=>{
    let tasks = [];
    let addTask = (task)=>{
        tasks.push(task);
    };
    return {addTask,name,tasks}
};

module.exports = {
    Project:Project
};