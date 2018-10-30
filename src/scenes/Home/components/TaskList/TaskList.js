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
        let clear = ()=>{
            while(column.node.hasChildNodes()){
                column.node.firstChild.remove();
            }
        };
        return {addCell,clear,node}
    })(node);

    let appendTask = (descriptionText, dateText)=>{
        let tc = TaskCard(descriptionText, dateText);
        table.addCell(tc.node);
        return tc;
    };

    let clearList = ()=>{
        table.clear();
    };

    let renderTasks = (taskList)=>taskList.map((task)=>appendTask(task.description, task.formattedDate()));

    return {appendTask,clearList, node, renderTasks}
})();

module.exports = {
    TaskList:TaskList
};