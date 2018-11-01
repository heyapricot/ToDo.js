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
    };

    let onClickDone = (task)=>{
        ToDo.completeTask(task);
    };

    let onClickNewTask = ()=>{
        let taskValues = TaskForm.getValues();
        if (ToDo.getActiveProject().name !== 'completed' && taskValues.reduce((acc,val)=>((val !== 'undefined' && val !== null && val !== '') && acc), true)){
            let task = ToDo.addTask(taskValues[0], taskValues[1], taskValues[2]);
            let tc = TaskList.appendTask(task.description, task.formattedDate(), task.priority);
            let removeClosure = ()=> onClickRemoveCard(task);
            tc.buttons[0].setClickFunction(removeClosure);
            let doneClosure = ()=> onClickDone(task);
            tc.buttons[1].setClickFunction(doneClosure);
            let priorityChangeClosure = ()=>task.priority = tc.getPriority();
            tc.setValueChangeFunction(priorityChangeClosure);
        }
        console.log(ToDo.getActiveProject().tasks());
    };

    let onSelectProject = (index)=>{
        let activeProject = ToDo.setActiveProject(index);
        TaskList.clearList();
        let taskCards = TaskList.renderTasks(activeProject.tasks());
        if(activeProject.name === 'completed'){
            taskCards.forEach((tc)=>tc.markAsCompleted());
        }
    };

    ProjectHeader.setCallback(onSelectProject);

    TaskForm.onClickNewTask(onClickNewTask);

    return {node}
})();

module.exports = {
    Home:Home
};