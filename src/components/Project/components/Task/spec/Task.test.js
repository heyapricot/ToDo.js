const {Task} = require('../Task');
describe('Task',()=>{
    describe('Properties',()=>{
        let description = 'Prepare meeting';
        let task = Task(description);
        it('has a description',()=>{
            expect(task.description).toEqual(description);
        });
    });
});