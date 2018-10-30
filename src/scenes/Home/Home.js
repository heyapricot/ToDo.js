const {ProjectHeader} = require('./components/ProjectHeader/ProjectHeader');
const {TaskForm} = require('./components/TaskForm/TaskForm');
const {TaskList} = require('./components/TaskList/TaskList');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = (()=>{
    let node = document.createElement('section');
    node.id = 'main';
    [ProjectHeader, TaskList, TaskForm].forEach((component)=>node.appendChild(component.node));
    ProjectHeader.renderOptions(ToDo.projectNames());

    let onClickRemoveCard = (task)=>{
        ToDo.getActiveProject().removeTask(task);
        console.log(ToDo.getActiveProject().tasks());
    };

    let onClickNewTask = ()=>{
        let taskValues = TaskForm.getValues();
        if (taskValues.reduce((acc,val)=>((val !== 'undefined' && val !== null && val !== '') && acc), true)){
            let task = ToDo.addTask(taskValues[0], taskValues[1]);
            let tc = TaskList.appendTask(task.description, task.formattedDate());
            let closure = ()=> onClickRemoveCard(task);
            tc.buttons[0].setClickFunction(closure);
        }
        console.log(ToDo.getActiveProject().tasks());
    };

    let onSelectProject = (index)=>ToDo.setActiveProject(index);
    ProjectHeader.setCallback(onSelectProject);

    TaskForm.onClickNewTask(onClickNewTask);

    return {node}
})();

module.exports = {
    Home:Home
};