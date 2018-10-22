const {format} = require('date-fns');
let Task = (description, dueDate)=>{
    let due = ((date)=>{
        let formatted = format(date,'MM/dd/yyyy');
        return {date,formatted}
    })(dueDate);
    return {description, due}
};

module.exports = {
    Task:Task
};