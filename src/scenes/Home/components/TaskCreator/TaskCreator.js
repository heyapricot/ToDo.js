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
        columns[0].dateInput = Bootstrap.createElement('input',inputCss,columns[0].node);
        columns[0].dateInput.node.type = 'Date';
        columns[1].buttonGroup = Bootstrap.createElement('div', ['btn-group', 'btn-group-sm'],columns[1].node);

        let buttonQuantity = 3;
        let iconClasses = Array.from(Array(buttonQuantity)).map(()=>['fas','fa-flag']);
        console.log(iconClasses);

        let buttonClasses = ['btn-outline-info','btn-outline-secondary','btn-outline-danger'].map((elem,index)=>index === 1 ? [elem,'border-0','active'] : [elem,'border-0']);

        columns[1].buttonGroup.buttons = ((parentNode, quantity, cssClasses, iconClasses )=> Array.from(Array(quantity)).map(
            (elem,index)=>{
                let obj = Bootstrap.createElement('div',['btn', ...cssClasses[index]],parentNode);
                obj.node.icon = Bootstrap.createElement('i',iconClasses[index],obj.node);
            }))(columns[1].buttonGroup.node,3,buttonClasses, iconClasses);

        let newTaskButton = Bootstrap.createElement('div',['btn','btn-success', 'btn-sm', 'rounded-circle'],columns[2].node);
        let newTaskIcon = Bootstrap.createElement('i',['fas','fa-plus'],newTaskButton.node);
        newTaskButton.icon = newTaskIcon;
        columns[2].newTaskButton = newTaskButton;

    })(form.rows[1], inputCssClasses);

    return {node}
})();

module.exports = {
    TaskCreator:TaskCreator
};

