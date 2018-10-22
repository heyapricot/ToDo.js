const {Project} = require('./components/Project/Project');
const ToDo = (()=>{
    let projects = ((defaultProjectName)=>{
        let projectList = [Project(defaultProjectName)];
        return projectList
    })('inbox');
    return {projects}
})();

module.exports = {
    ToDo:ToDo
};