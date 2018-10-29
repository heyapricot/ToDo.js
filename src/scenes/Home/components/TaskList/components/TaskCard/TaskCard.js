const {Bootstrap} = require('../../../Bootstrap/Bootstrap');
let TaskCard = (descriptionText, dateText)=>{
    const rowQuantity = 2;
    let form = Bootstrap.createElement('form',['card','p-2','bg-transparent','border-secondary']);
    let rows = Array.from(Array(rowQuantity)).map(()=> Bootstrap.createElement('div',['form-row'],form.node));
    rows[0].column = Bootstrap.createElement('div',['col'],rows[0].node);
    let description = Bootstrap.createElement('input',['form-control', 'form-control-sm', 'bg-transparent', 'border-0', 'text-light'],rows[0].column.node);
    description.node.value = descriptionText;
    rows[1].column = Bootstrap.createElement('div',['col', 'd-flex', 'justify-content-between'],rows[1].node);
    let date = Bootstrap.createElement('span',['badge', 'badge-pill', 'badge-secondary','align-self-center'],rows[1].column.node);
    date.node.textContent = dateText;
    let buttons = Bootstrap.createElement('div',['btn-group', 'btn-group-sm'],rows[1].column.node);
    buttons.remove = Bootstrap.createElement('div',['btn', 'btn-danger'],buttons.node);
    buttons.remove.icon = Bootstrap.createElement('i',['fas','fa-times'],buttons.remove.node);
    buttons.remove.node.addEventListener('click', ()=>{form.node.remove()});
    buttons.done = Bootstrap.createElement('div',['btn', 'btn-success'],buttons.node);
    buttons.done.icon = Bootstrap.createElement('i',['fas','fa-check'],buttons.done.node);
    buttons.done.node.addEventListener('click', ()=>{form.node.remove()});
    form.buttons = buttons;
    return form;
};

module.exports = {
    TaskCard:TaskCard
};