const {Bootstrap} = require('../Bootstrap/Bootstrap');
const {TaskCard} = require('./components/TaskCard/TaskCard');
let TaskList = (()=>{
    let container = Bootstrap.createElement('div',['container']);
    container.node.id = 'taskList';

    let table = ((parentNode)=>{
        let table = Bootstrap.createElement('div',['row','h-100'], parentNode);
        let column = Bootstrap.createElement('div',['col', 'h-100','d-flex','flex-column'],table.node);
        column.node.id = 'listColumn';
        let body = Bootstrap.createElement('div',['row'],column.node);
        let cell = Bootstrap.createElement('div',['col','d-flex','flex-column'],body.node);
        return table
    })(container.node);

    let node = container.node;

    let appendTask = (desciptionText, dateText)=>{
        let tc = TaskCard(desciptionText, dateText);
        body.cell.node.appendChild(tc.node);
        return tc;
    };

    return {appendTask,node, table}
})();

module.exports = {
    TaskList:TaskList
};