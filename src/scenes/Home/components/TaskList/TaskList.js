const {Bootstrap} = require('../Bootstrap/Bootstrap');
const {TaskCard} = require('./components/TaskCard/TaskCard');
let TaskList = (()=>{
    let row = Bootstrap.createElement('div',['row','h-100']);
    let node = row.node;
    let column = Bootstrap.createElement('div',['col', 'h-100','d-flex','flex-column'],row.node);
    row.column = column;
    column.node.id = 'listColumn';
    let head = Bootstrap.createElement('div',['container','text-light','text-capitalize', 'text-center'],column.node);
    let body = Bootstrap.createElement('div',['row'],column.node);
    body.cell = Bootstrap.createElement('div',['col','d-flex','flex-column'],body.node);

    let setHeaderText = (headerText)=>{
        head.node.textContent = headerText;
    };

    let appendRow = (node)=>{
        body.cell.node.appendChild(node);
    };

    let init = (()=>{
        Array.from(Array(14)).map(()=>{
            let tc = TaskCard('This is a test', '10/31/2018', 'Test');
            appendRow(tc.node);
            return tc;
        })
    })();

    return {body, head, node, setHeaderText}
})();

module.exports = {
    TaskList:TaskList
};