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

    return {body, head, node, setHeaderText}
})();

module.exports = {
    TaskList:TaskList
};