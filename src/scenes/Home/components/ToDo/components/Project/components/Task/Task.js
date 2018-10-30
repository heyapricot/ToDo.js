const {format} = require('date-fns');
const priorityLevels = {
    "HIGH":0,
    "NORMAL":1,
    "LOW":2
};
let Task = (description, dueDate, priority)=>{
    let formattedDate = ()=>dueDate.toDateString();
    let values = ()=>[description, dueDate, priority];
    return {description, dueDate, formattedDate, priority, values}
};

module.exports = {
    priorityLevels:priorityLevels,
    Task:Task
};