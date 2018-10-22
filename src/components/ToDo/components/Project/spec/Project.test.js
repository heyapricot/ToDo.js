const {Project} = require('../Project');
const {Task} = require('../components/Task/Task');
describe('Project',()=>{
    let name = 'test';
    let project = Project(name);
    describe('properties',()=>{
        it('has a name',()=>{
            expect(project.name).toEqual(name);
        });
    });
    it('can store a task',()=>{
        let task = Task('test');
        project.addTask(task);
        expect(project.tasks).toContain(task);
    })
});