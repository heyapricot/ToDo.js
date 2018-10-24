const {Bootstrap} = require('../../../Bootstrap/Bootstrap');
let TaskCard = (descriptionText, dateText)=>{
    const rowQuantity = 2;
    let obj = Bootstrap.createElement('tr',['card','bg-transparent','border-secondary']);
    obj.cell = Bootstrap.createElement('td',[],obj.node);
    obj.cell.rows = Array.from(Array(rowQuantity)).map(()=> Bootstrap.createElement('div',['row'],obj.cell.node));
    let topRow = obj.cell.rows[0];
    topRow.column = Bootstrap.createElement('div',['col'],topRow.node);
    let description = Bootstrap.createElement('span',[],topRow.column.node);
    description.node.textContent = descriptionText;
    let bottomRow = obj.cell.rows[1];
    bottomRow.column = Bootstrap.createElement('div',['col', 'd-flex', 'justify-content-between'],bottomRow.node);
    bottomRow.date = Bootstrap.createElement('span',['badge', 'badge-pill', 'badge-primary','align-self-center'],bottomRow.column.node);
    bottomRow.date.node.textContent = dateText;
    let buttons = Bootstrap.createElement('div',['btn-group', 'btn-group-sm'],bottomRow.column.node);
    bottomRow.buttons = buttons;
    buttons.remove = Bootstrap.createElement('div',['btn', 'btn-danger'],buttons.node);
    buttons.remove.icon = Bootstrap.createElement('i',['fas','fa-times'],buttons.remove.node);
    buttons.remove.node.addEventListener('click', ()=>{obj.node.remove()});
    buttons.done = Bootstrap.createElement('div',['btn', 'btn-success'],buttons.node);
    buttons.done.icon = Bootstrap.createElement('i',['fas','fa-check'],buttons.done.node);
    buttons.done.node.addEventListener('click', ()=>{obj.node.remove()});
    return obj;
};

module.exports = {
    TaskCard:TaskCard
};