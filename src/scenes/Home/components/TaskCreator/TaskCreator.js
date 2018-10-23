const {Bootstrap} = require('../../components/Bootstrap/Bootstrap');
let TaskCreator = (()=>{
    let form = Bootstrap.createElement('form',['p-1','card', 'bg-transparent', 'border-secondary']);
    let node = form.node;
    let inputCssClasses = ['form-control','form-control-sm', 'bg-transparent', 'border-0', 'text-light'];
    form.rows = ((parentNode, rowQuantity)=> Array.from(Array(rowQuantity)).map(()=> Bootstrap.createElement('div',['form-row'], parentNode)))(form.node,2);
    let top = ((row, placeHolderText, inputCss)=>{
        let col = ((parentNode)=> Bootstrap.createElement('div',['col'],parentNode))(row.node);
        col.input = ((parentNode)=> Bootstrap.createElement('input',inputCss,parentNode))(col.node);
        col.input.node.placeholder = placeHolderText;
        return {col}
    })(form.rows[0], 'Task Description', inputCssClasses);

    let bottom = ((row, inputCss)=>{
        let columns = ((parentNode, columnQuantity)=> Array.from(Array(columnQuantity)).map(()=>Bootstrap.createElement('div',['col-auto'],parentNode)))(row.node,3);
        columns[0].dateInput = ((parentNode)=> Bootstrap.createElement('input',inputCss,parentNode))(columns[0].node);
        columns[0].dateInput.node.type = 'Date';
        columns[1].buttonGroup = ((parentNode)=> Bootstrap.createElement('div', ['btn-group', 'btn-group-sm'],parentNode))(columns[1].node);
        columns[1].buttonGroup.buttons = ((parentNode, quantity, buttonClasses)=> Array.from(Array(quantity)).map((elem,index)=>{
            let obj = Bootstrap.createElement('div',['btn', ...buttonClasses[index]],parentNode);
            obj.node.textContent = index;
        }))(columns[1].buttonGroup.node,3,[['btn-outline-primary'], ['btn-outline-success'], ['btn-outline-danger']]);
        columns[2].newTaskButton = ((parentNode)=> Bootstrap.createElement('div',['btn','btn-success', 'btn-sm'],parentNode))(columns[2].node);
        columns[2].newTaskButton.node.textContent = 'New Task';
    })(form.rows[1], inputCssClasses);

    return {node}
})();

module.exports = {
    TaskCreator:TaskCreator
};

