const {Project} = require('./components/Project/Project');
const ToDo = (()=>{
    let projects = ((defaultProjectName)=>{
        let list = [Project(defaultProjectName)];
        let names = ()=>{
            return list.map((project)=>{
                return project.name;
            });
        };
        return {list, names}
    })('inbox');
    let addProject = (name)=>{
        let project = Project(name);
        projects.list.push(project);
        return project
    };
    return {addProject,projects}
})();

module.exports = {
    ToDo:ToDo
};