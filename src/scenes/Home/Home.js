const {Bootstrap} = require('./components/Bootstrap/Bootstrap');
const {ProjectHeader} = require('./components/ProjectHeader/ProjectHeader');
const {TaskForm} = require('./components/TaskForm/TaskForm');
const {TaskList} = require('./components/TaskList/TaskList');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = (()=>{
    let node = document.createElement('section');
    node.id = 'main';
    [ProjectHeader, TaskList, TaskForm].forEach((component)=>node.appendChild(component.node));
    ProjectHeader.renderOptions(ToDo.projectNames());

    let onProjectSelect = (index)=>ToDo.setActiveProject(index);
    ProjectHeader.setCallback(onProjectSelect);

    let onNewTaskClick = ()=>{
        let taskValues = TaskForm.getValues();
        let task = ToDo.addTask(taskValues[0], taskValues[1]);
        let tc = TaskList.appendTask(task.description, task.formattedDate());
        let closure = ()=>{
            ToDo.getActiveProject().removeTask(task);
            console.log(ToDo.getActiveProject().tasks());
        };
        tc.buttons.remove.node.addEventListener('click',closure);
        console.log(ToDo.getActiveProject().tasks());
    };

    TaskForm.onNewTaskClick(onNewTaskClick);

    return {node}
})();

module.exports = {
    Home:Home
};