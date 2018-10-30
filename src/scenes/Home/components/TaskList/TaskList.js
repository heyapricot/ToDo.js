const {Bootstrap} = require('../Bootstrap/Bootstrap');
const {TaskCard} = require('./components/TaskCard/TaskCard');
let TaskList = (()=>{
    let container = Bootstrap.createElement('div',['container']);
    let node = container.node;
    node.id = 'taskList';

    let table = ((parentNode)=>{
        let row = Bootstrap.createElement('div',['row','h-100'], parentNode);
        let node = row.node;
        let column = Bootstrap.createElement('div',['col', 'h-100','d-flex','flex-column'],row.node);
        column.node.id = 'listColumn';
        let addCell = (node)=>column.node.appendChild(node);
        return {addCell,node}
    })(node);

    let appendTask = (desciptionText, dateText)=>{
        let tc = TaskCard(desciptionText, dateText);
        table.addCell(tc.node);
        return tc;
    };

    return {appendTask,node}
})();

module.exports = {
    TaskList:TaskList
};