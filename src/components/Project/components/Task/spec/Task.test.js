const {Task} = require('../Task');
const {format} = require('date-fns');
describe('Task',()=>{
    describe('Properties',()=>{
        let description = 'Prepare meeting';
        let dueDate = Date.now();
        let task = Task(description, dueDate);
        it('has a description',()=>{
            expect(task.description).toEqual(description);
        });
        it('has a due date',()=>{
            expect(task.due.formatted).toEqual(format(dueDate,'MM/dd/yyyy'));
        });
    });
});