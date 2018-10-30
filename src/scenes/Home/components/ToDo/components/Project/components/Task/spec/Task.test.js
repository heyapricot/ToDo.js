const {Task, priorityLevels} = require('../Task');
const {format} = require('date-fns');
describe('Task',()=>{
    describe('Properties',()=>{
        let description = 'Prepare meeting';
        let dueDate = Date.now();
        let priority = priorityLevels.HIGH;
        let task = Task(description, dueDate, priority);
        it('has a description',()=>{
            expect(task.description).toEqual(description);
        });
        it('has a priority level', ()=>{
            expect(task.priority).toEqual(priority);
        });
    });
});