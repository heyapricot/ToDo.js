const {Bootstrap} = require('../../components/Bootstrap/Bootstrap');
const {TaskForm} = require('./components/TaskForm/TaskForm');
let TaskCreator = (()=>{
    let buttons = {};
    let node = TaskForm.node;
    let description = TaskForm.description;
    buttons.newTask = TaskForm.newTask;

    let getValues = ()=>{
        return [description.value(), TaskForm.date.value()]
    };

    return {buttons,node,getValues}
})();

module.exports = {
    TaskCreator:TaskCreator
};

