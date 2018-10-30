const {Project} = require('../Project');
describe('Project',()=>{
    let name = 'test';
    let project = Project(name);
    describe('properties',()=>{
        it('has a name',()=>{
            expect(project.name).toEqual(name);
        });
    });
    it('can store a task',()=>{
        let description = 'test';
        project.addTask(description);
        expect(project.taskDescriptions()).toContain(description);
    })
});