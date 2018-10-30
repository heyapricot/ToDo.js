const {Bootstrap} = require('./components/Bootstrap/Bootstrap');
const {ProjectHeader} = require('./components/ProjectHeader/ProjectHeader');
const {TaskForm} = require('./components/TaskForm/TaskForm');
const {TaskList} = require('./components/TaskList/TaskList');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = ((project)=>{
    let node = document.createElement('section');
    node.id = 'main';
    [ProjectHeader, TaskList, TaskForm].forEach((component)=>node.appendChild(component.node));

    let onProjectSelect = (index)=>{
        ToDo.setActiveProject(index);
        console.log(`Active project:`);
        console.log(ToDo.activeProject);
    };
    ProjectHeader.setCallback(onProjectSelect);
    ProjectHeader.renderOptions(ToDo.projectNames(),onProjectSelect);

    let onNewTaskClick = ()=>{
        let taskValues = TaskForm.getValues();
        let task = ToDo.addTask(taskValues[0], taskValues[1]);
        let tc = TaskList.appendTask(task.description, task.formattedDate());
        let closure = ()=>{
            ToDo.activeProject.removeTask(task);
            console.log(ToDo.activeProject.tasks());
        };
        tc.buttons.remove.node.addEventListener('click',closure);
        console.log(ToDo.activeProject.tasks());
    };

    TaskForm.onNewTaskClick(onNewTaskClick);

    return {node}
})(ToDo.currentProject);

module.exports = {
    Home:Home
};