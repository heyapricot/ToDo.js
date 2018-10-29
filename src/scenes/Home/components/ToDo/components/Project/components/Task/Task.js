const {format} = require('date-fns');
const priorityLevels = {
    "HIGH":0,
    "NORMAL":1,
    "LOW":2
};
let Task = (description, dueDate, priority)=>{
    let finished = false;
    let formattedDate = ()=>dueDate.toDateString();
    return {description, dueDate, formattedDate, finished, priority}
};

module.exports = {
    priorityLevels:priorityLevels,
    Task:Task
};