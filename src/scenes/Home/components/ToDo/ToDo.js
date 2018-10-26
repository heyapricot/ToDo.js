const {Project} = require('./components/Project/Project');
const ToDo = ((defaultProjectName)=>{
    let currentProject = Project(defaultProjectName);
    let projects = (()=>{
        let list = [currentProject];
        let names = ()=>{
            return list.map((project)=>{
                return project.name;
            });
        };
        return {list, names}
    })();
    let addProject = (name)=>{
        let project = Project(name);
        projects.list.push(project);
        return project
    };
    let addTask = (description, project = currentProject)=>{
        return project.addTask(description)
    };
    return {addProject,addTask,currentProject,projects}
})('inbox');

module.exports = {
    ToDo:ToDo
};