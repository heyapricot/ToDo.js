const {ToDo} = require('../ToDo');
describe('ToDo',()=>{
    it('has a default project',()=>{
        expect(ToDo.projects.length).toBeGreaterThan(0);
    });
    it('can add a Project',()=>{
        let name = 'test';
        ToDo.addProject(name);
        expect(ToDo.projectNames()).toContain(name);
    });
    it('can add a Task',()=>{
        let description = 'test';
        ToDo.addTask(description);
        expect(ToDo.getActiveProject().taskDescriptions()).toContain(description);
    });
});