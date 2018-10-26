const {Bootstrap} = require('../../components/Bootstrap/Bootstrap');
let TaskCreator = (()=>{
    let form = Bootstrap.createElement('form',['p-1','card', 'bg-transparent', 'border-secondary']);
    let node = form.node;
    let inputCssClasses = ['form-control','form-control-sm', 'bg-transparent', 'border-0', 'text-light'];
    let buttons = {};
    form.rows = ((parentNode, rowQuantity)=> Array.from(Array(rowQuantity)).map(
        (elem,index)=>{
            let cssClasses = index === 0 ? ['form-row'] : ['form-row','d-flex','justify-content-between'];
            return Bootstrap.createElement('div',cssClasses, parentNode)
        }))(form.node,2);

    let top = ((row, placeHolderText, inputCss)=>{
        let col = Bootstrap.createElement('div',['col'],row.node);
        row.col = col;
        col.input = ((parentNode, placeHolderText) => {
            let obj = Bootstrap.createElement('input', inputCss, parentNode);
            obj.node.placeholder = placeHolderText;
            obj.value = ()=>{ return obj.node.value};
            return obj;
        })(col.node, placeHolderText);
        return row;
    })(form.rows[0], 'Task Description', inputCssClasses);

    let description = top.col.input;

    let bottom = ((row, inputCss)=>{
        let columns = ((parentNode, columnQuantity)=> Array.from(Array(columnQuantity)).map(()=>Bootstrap.createElement('div',['col-auto'],parentNode)))(row.node,3);
        row.columns = columns;
        columns[0].dateInput = Bootstrap.createElement('input',inputCss,columns[0].node);
        columns[0].dateInput.node.type = 'date';
        columns[1].buttonGroup = Bootstrap.createElement('div', ['btn-group', 'btn-group-sm'],columns[1].node);

        let buttonQuantity = 3;
        let iconClasses = Array.from(Array(buttonQuantity)).map(()=>['fas','fa-flag']);

        let buttonClasses = ['btn-outline-info','btn-outline-warning','btn-outline-danger'].map((elem,index)=>index === 0 ? [elem,'border-0','active'] : [elem,'border-0']);

        columns[1].buttonGroup.buttons = ((parentNode, quantity, cssClasses, iconClasses )=> Array.from(Array(quantity)).map(
            (elem,index)=>{
                let obj = Bootstrap.createElement('div',['btn', ...cssClasses[index]],parentNode);
                obj.node.icon = Bootstrap.createElement('i',iconClasses[index],obj.node);
            }))(columns[1].buttonGroup.node,3,buttonClasses, iconClasses);

        return row
    })(form.rows[1], inputCssClasses);

    let newTask = ((parentNode, cssClasses)=>{
        let obj =  Bootstrap.createElement('div',cssClasses, parentNode);
        obj.icon = Bootstrap.createElement('i',['fas','fa-plus'],obj.node);

        obj.onClick = (callbackfn)=>{obj.node.addEventListener('click',callbackfn)};

        return obj;
    })(bottom.columns[2].node, ['btn','btn-success', 'btn-sm', 'rounded-circle']);

    buttons.newTask = newTask;

    let getValues = ()=>{
        return [description.value()]
    };

    return {buttons,node,getValues}
})();

module.exports = {
    TaskCreator:TaskCreator
};

