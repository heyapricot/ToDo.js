const {Bootstrap} = require('../../../Bootstrap/Bootstrap');
const {UI} = require('../../../UI/UI');
let TaskCard = (descriptionText, dateText)=>{

    let rowQuantity = 2;
    let columnQuantity = 2;
    let container = Bootstrap.createElement('div',['card','p-2','bg-transparent','border-secondary']);
    let node = container.node;
    let rows = Array.from(Array(rowQuantity)).map(()=> Bootstrap.createElement('div',['row'],container.node));
    let columnsCss = [['col'],['col', 'd-flex', 'justify-content-between']];
    let columns = Array.from(Array(columnQuantity)).map((value,index)=>Bootstrap.createElement('div',columnsCss[index],rows[index].node));
    let description = Bootstrap.createElement('input',['form-control', 'form-control-sm', 'bg-transparent', 'border-0', 'text-light'],columns[0].node);
    description.node.value = descriptionText;
    let date = Bootstrap.createElement('span',['badge', 'badge-pill', 'badge-secondary','align-self-center'],columns[1].node);
    date.node.textContent = dateText;
    let priority = UI.PriorityPicker(3,['btn-outline-info','btn-outline-warning','btn-outline-danger'],['fas','fa-flag']);
    columns[1].node.appendChild(priority.node);
    let buttonGroup = Bootstrap.createElement('div',['btn-group', 'btn-group-sm'],columns[1].node);
    let buttons = ((parentNode)=>{
        let buttonCss = [['btn', 'btn-danger'], ['btn', 'btn-success']];
        let iconCss = [['fas','fa-times'], ['fas', 'fa-check']];
        let buttons = Array.from(Array(buttonCss.length)).map(
            (value,index)=>{
                let button = UI.ActionButton(buttonCss[index], iconCss[index], parentNode);
                button.setClickFunction(()=>{container.node.remove()});
                return button
            }
        );
        return buttons;
    })(buttonGroup.node);

    let markAsCompleted = ()=>{
        buttonGroup.node.remove();
        priority.node.remove();
        ['text-light', 'text-muted'].forEach((cssClass)=>description.node.classList.toggle(cssClass));
    };

    let setPriority = (number)=>priority.setActiveButton(number);

    let setValueChangeFunction = (callback)=>priority.addCallback(callback);

    return {buttons, markAsCompleted, node, setPriority, setValueChangeFunction}
};

module.exports = {
    TaskCard:TaskCard
};