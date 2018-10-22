const {ToDo} = require('../ToDo');
describe('ToDo',()=>{
    it('has a default project',()=>{
        expect(ToDo.projects.length).toBeGreaterThan(0);
    });
});