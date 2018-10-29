const {Bootstrap} = require('./components/Bootstrap/Bootstrap');
const {ProjectHeader} = require('./components/ProjectHeader/ProjectHeader');
const {TaskForm} = require('./components/TaskForm/TaskForm');
const {TaskList} = require('./components/TaskList/TaskList');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = ((project)=>{
    let node = document.createElement('section');
    node.id = 'main';
    node.appendChild(ProjectHeader.node);
    node.appendChild(TaskList.node);

    let onProjectSelect = (index)=>{
        ToDo.setActiveProject(index);
        console.log(`Active project:`);
        console.log(ToDo.activeProject);
    };
    ProjectHeader.setCallback(onProjectSelect);
    ProjectHeader.renderOptions(ToDo.projectNames(),onProjectSelect);

    let container = Bootstrap.createElement('div',['container'],node);
    container.node.id = 'taskCreatorContainer';
    container.row = Bootstrap.createElement('div',['row','h-100'],container.node);
    container.row.col = Bootstrap.createElement('div',['col','col-sm','d-flex', 'flex-column', 'justify-content-center'],container.row.node);
    container.row.col.node.appendChild(TaskForm.node);

    let onNewTaskClick = ()=>{
        let taskValues = TaskForm.getValues();
        let task = ToDo.addTask(taskValues[0], taskValues[1]);
        let tc = TaskList.appendTask(task.description, task.formattedDate());
        let closure = ()=>{
            ToDo.currentProject.removeTask(task);
            console.log(ToDo.currentProject.tasks());
        };
        tc.buttons.remove.node.addEventListener('click',closure);
        console.log(ToDo.currentProject.tasks());
    };
    TaskForm.newTask.onClick(onNewTaskClick);

    return {node, taskListContainer}
})(ToDo.currentProject);

module.exports = {
    Home:Home
};