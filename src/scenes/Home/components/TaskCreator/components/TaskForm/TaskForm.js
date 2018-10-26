const {Bootstrap} = require('../../../Bootstrap/Bootstrap');
const {UI} = require('../../../UI/UI');
const TaskForm = ((inputCss)=>{
    let obj = Bootstrap.createElement('form',['p-1','card', 'bg-transparent', 'border-secondary']);
    let rows = ((parentNode, rowQuantity)=> Array.from(Array(rowQuantity)).map(
            (elem,index)=>{
                let cssClasses = index === 0 ? ['form-row'] : ['form-row','d-flex','justify-content-between'];
                return Bootstrap.createElement('div',cssClasses, parentNode)
            })
    )(obj.node,2);

    rows[0].col = Bootstrap.createElement('div',['col'],rows[0].node);
    rows[1].columns = ((parentNode, columnQuantity, cssClasses)=> Array.from(Array(columnQuantity)).map(()=>Bootstrap.createElement('div',cssClasses,parentNode)))(rows[1].node,3,['col-auto']);


    let description = ((parentNode, placeHolderText, inputCss) => {
        let obj = Bootstrap.createElement('input', inputCss, parentNode);
        obj.node.placeholder = placeHolderText;
        obj.value = ()=>{ return obj.node.value};
        return obj;
    })(rows[0].col.node, 'Task Description', inputCss);

    let date = ((parentNode, inputCss)=>{
        let obj = Bootstrap.createElement('input',inputCss,parentNode);
        obj.node.type = 'date';
        obj.value = ()=>{ return obj.node.value};
        return obj;
    })(rows[1].columns[0].node, inputCss);

    let priorityPicker = UI.priorityPicker(3,['btn-outline-info','btn-outline-warning','btn-outline-danger'],['fas','fa-flag']);
    rows[1].columns[1].node.appendChild(priorityPicker.node);

    let newTask = ((parentNode, cssClasses)=>{
        let obj =  Bootstrap.createElement('div',cssClasses, parentNode);
        obj.icon = Bootstrap.createElement('i',['fas','fa-plus'],obj.node);

        obj.onClick = (callbackfn)=>{obj.node.addEventListener('click',callbackfn)};

        return obj;
    })(rows[1].columns[2].node, ['btn','btn-success', 'btn-sm', 'rounded-circle']);



    obj.description = description;
    obj.date = date;
    obj.newTask = newTask;

    return obj;
})(['form-control','form-control-sm', 'bg-transparent', 'border-0', 'text-light']);

module.exports = {
    TaskForm:TaskForm
};