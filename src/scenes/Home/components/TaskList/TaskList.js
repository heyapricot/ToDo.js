const {Bootstrap} = require('../Bootstrap/Bootstrap');
let TaskList = (()=>{
    let table = Bootstrap.createElement('table',['table','table-dark']);
    let node = table.node;
    let head = Bootstrap.createElement('thead',[],table.node);
    head.row = Bootstrap.createElement('tr',['text-capitalize', 'text-center'],head.node);
    let th = Bootstrap.createElement('th',[],head.row.node);
    head.row.th = th;
    th.node.scope = 'col';
    let body = Bootstrap.createElement('tbody',[],table.node);

    let setHeaderText = (headerText)=>{
        th.node.textContent = headerText;
    };

    let appendRow = (node)=>{
        body.node.appendChild(node);
    };


    let TaskCard = (description, date, projectName)=>{
        const rowQuantity = 2;
        let obj = Bootstrap.createElement('tr',['card','bg-transparent','border-secondary']);
        obj.cell = Bootstrap.createElement('td',[],obj.node);
        obj.cell.rows = Array.from(Array(rowQuantity)).map(()=> Bootstrap.createElement('div',['row'],obj.cell.node));
        let topRow = obj.cell.rows[0];
        topRow.column = Bootstrap.createElement('div',['col'],topRow.node);
        let descriptionHolder = Bootstrap.createElement('span',[],topRow.column.node);
        descriptionHolder.node.textContent = description;
        let bottomRow = obj.cell.rows[1];
        bottomRow.column = Bootstrap.createElement('div',['col', 'd-flex', 'justify-content-between'],bottomRow.node);
        let dateHolder = Bootstrap.createElement('span',['badge', 'badge-primary'],bottomRow.column.node);
        let projectNameHolder = Bootstrap.createElement('span',['badge', 'badge-primary'],bottomRow.column.node);
        dateHolder.node.textContent = date;
        projectNameHolder.node.textContent = projectName;
        return obj;
    };

    let init = (()=>{
        let tc = TaskCard('This is a test', '10/31/2018', 'Test');
        appendRow(tc.node);
    })();

    return {body, head, node, setHeaderText}
})();

module.exports = {
    TaskList:TaskList
};