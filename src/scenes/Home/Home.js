const {Bootstrap} = require('./components/Bootstrap/Bootstrap');
const {TaskCreator} = require('./components/TaskCreator/TaskCreator');
const {TaskList} = require('./components/TaskList/TaskList');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = ((project)=>{
    let node = document.createElement('section');
    node.id = 'main';
    let taskListContainer = Bootstrap.createElement('div',['container'],node);
    taskListContainer.node.id = 'taskList';
    taskListContainer.node.appendChild(TaskList.node);
    TaskList.setHeaderText(project.name);

    let container = Bootstrap.createElement('div',['container'],node);
    container.node.id = 'taskCreatorContainer';
    container.row = Bootstrap.createElement('div',['row','h-100'],container.node);
    container.row.col = Bootstrap.createElement('div',['col','col-sm','d-flex', 'flex-column', 'justify-content-center'],container.row.node);
    container.row.col.node.appendChild(TaskCreator.node);

    let onNewTaskClick = ()=>{
        console.log(TaskCreator.getValues());
    };
    TaskCreator.buttons.newTask.onClick(onNewTaskClick);

    return {node, taskListContainer}
})(ToDo.currentProject);

module.exports = {
    Home:Home
};