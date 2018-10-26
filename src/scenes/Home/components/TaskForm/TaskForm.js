const {Bootstrap} = require('../Bootstrap/Bootstrap');
const {UI} = require('../UI/UI');
const TaskForm = ((inputCss)=>{
    let form = Bootstrap.createElement('form',['p-1','card', 'bg-transparent', 'border-secondary']);
    let rows = ((parentNode, rowQuantity)=> Array.from(Array(rowQuantity)).map(
            (elem,index)=>{
                let cssClasses = index === 0 ? ['form-row'] : ['form-row','d-flex','justify-content-between'];
                return Bootstrap.createElement('div',cssClasses, parentNode)
            })
    )(form.node,2);

    rows[0].col = Bootstrap.createElement('div',['col'],rows[0].node);
    rows[1].columns = ((parentNode, columnQuantity, cssClasses)=> Array.from(Array(columnQuantity)).map(()=>Bootstrap.createElement('div',cssClasses,parentNode)))(rows[1].node,3,['col-auto']);


    let description = ((parentNode, placeHolderText, inputCss) => {
        let input = Bootstrap.createElement('input', inputCss, parentNode);
        input.node.placeholder = placeHolderText;
        input.value = ()=>{ return input.node.value};
        return input;
    })(rows[0].col.node, 'Task Description', inputCss);

    let date = ((parentNode, inputCss)=>{
        let input = Bootstrap.createElement('input',inputCss,parentNode);
        input.node.type = 'date';
        input.value = ()=>{ return input.node.valueAsDate};
        return input;
    })(rows[1].columns[0].node, inputCss);

    let priorityPicker = UI.PriorityPicker(3,['btn-outline-info','btn-outline-warning','btn-outline-danger'],['fas','fa-flag']);
    rows[1].columns[1].node.appendChild(priorityPicker.node);

    let newTask = Bootstrap.Button(['btn','btn-success', 'btn-sm', 'rounded-circle'],['fas','fa-plus'],'div');
    rows[1].columns[2].node.appendChild(newTask.node);

    let getValues = ()=>[description.value(), date.value(), priorityPicker.value()];
    
    form.description = description;
    form.date = date;
    form.getValues = getValues;
    form.newTask = newTask;
    form.priority = priorityPicker;

    return form;
})(['form-control','form-control-sm', 'bg-transparent', 'border-0', 'text-light']);

module.exports = {
    TaskForm:TaskForm
};