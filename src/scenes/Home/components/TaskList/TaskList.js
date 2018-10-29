const {Bootstrap} = require('../Bootstrap/Bootstrap');
const {TaskCard} = require('./components/TaskCard/TaskCard');
let TaskList = (()=>{

    let table = (()=>{
        let table = Bootstrap.createElement('div',['row','h-100']);
        let column = Bootstrap.createElement('div',['col', 'h-100','d-flex','flex-column'],table.node);
        column.node.id = 'listColumn';
        let head = ((parentNode)=>{
            let container = Bootstrap.createElement('div',['container','p-3'],parentNode);
            let row = Bootstrap.createElement('div',['row', 'd-flex', 'justify-content-center'], container.node);
            let column = Bootstrap.createElement('div',['col-6'], row.node);
            container.row = row;
            container.column = column;
            return container
        })(column.node);
        let body = Bootstrap.createElement('div',['row'],column.node);
        let cell = Bootstrap.createElement('div',['col','d-flex','flex-column'],body.node);
        table.head = head;
        return table
    })();

    let node = table.node;

    let header = ((cssClasses, parentNode)=>{
        let header = Bootstrap.createElement('select',cssClasses, parentNode);

        let cleanOptions = ()=>{ while(header.node.hasChildNodes()){ header.node.removeChild(header.node.firstChild) } };

        header.renderOptions = (projectNames) => {
            cleanOptions();
            projectNames.forEach((projectName, index) => {
                let option = document.createElement('option');
                option.value = index;
                option.textContent = projectName;
                header.node.appendChild(option);
            });
        };

        return header;

    })(['custom-select', 'bg-transparent', 'border-0', 'text-light', 'text-center', 'text-capitalize'], table.head.column.node);


    let setHeaderText = (headerText)=>{
        head.node.textContent = headerText;
    };

    let appendTask = (desciptionText, dateText)=>{
        let tc = TaskCard(desciptionText, dateText);
        body.cell.node.appendChild(tc.node);
        return tc;
    };

    return {appendTask,header,setHeaderText, node, table}
})();

module.exports = {
    TaskList:TaskList
};