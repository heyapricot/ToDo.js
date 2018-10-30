const {Project} = require('./components/Project/Project');
const ToDo = ((defaultProjectName)=>{
    let projects = [defaultProjectName, 'completed'].map((projectName)=>Project(projectName));
    let activeProject = projects[0];


    let addProject = (name)=>{
        let project = Project(name);
        projects.push(project);
        return project
    };
    let addTask = (description, date = Date.now(), priority, project = activeProject)=>{
        return project.addTask(description, date, project)
    };

    let completeTask = (task)=>{
        activeProject.removeTask(task);
        projects[1].addTask(task.description, task.dueDate, task.priority);
    };

    let getActiveProject = ()=>activeProject;

    let getProject = (index)=>projects[index];

    let setActiveProject = (index)=>{
        activeProject = projects[index];
    };

    let projectNames = ()=>projects.map((project)=>project.name);
    return {addProject,addTask, completeTask, getActiveProject,getProject, setActiveProject, projects, projectNames}
})('inbox');

module.exports = {
    ToDo:ToDo
};