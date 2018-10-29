const {Bootstrap} = require('../Bootstrap/Bootstrap');
const {TaskCard} = require('./components/TaskCard/TaskCard');
let TaskList = (()=>{
    let row = Bootstrap.createElement('div',['row','h-100']);
    let node = row.node;
    let column = Bootstrap.createElement('div',['col', 'h-100','d-flex','flex-column'],row.node);
    row.column = column;
    column.node.id = 'listColumn';
    let head = Bootstrap.createElement('div',['container','p-3','text-light','text-capitalize', 'text-center'],column.node);
    let body = Bootstrap.createElement('div',['row'],column.node);
    body.cell = Bootstrap.createElement('div',['col','d-flex','flex-column'],body.node);

    let setHeaderText = (headerText)=>{
        head.node.textContent = headerText;
    };

    let appendTask = (desciptionText, dateText)=>{
        let tc = TaskCard(desciptionText, dateText);
        body.cell.node.appendChild(tc.node);
        return tc;
    };

    return {appendTask,body, head, node, setHeaderText}
})();

module.exports = {
    TaskList:TaskList
};