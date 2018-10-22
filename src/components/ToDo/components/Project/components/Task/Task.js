const {format} = require('date-fns');
const priorityLevels = {
    "HIGH":0,
    "NORMAL":1,
    "LOW":2
};
let Task = (description, dueDate, priority)=>{
    let due = ((date)=>{
        let formatted = format(date,'MM/dd/yyyy');
        return {date,formatted}
    })(dueDate);
    let finished = false;
    return {description, due, finished, priority}
};

module.exports = {
    priorityLevels:priorityLevels,
    Task:Task
};