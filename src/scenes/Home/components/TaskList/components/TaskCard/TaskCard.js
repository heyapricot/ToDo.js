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
    let buttons = ((parentNode)=>{
        let buttonGroup = Bootstrap.createElement('div',['btn-group', 'btn-group-sm'],parentNode);
        let node = buttonGroup.node;
        let buttonCss = [['btn', 'btn-danger'], ['btn', 'btn-success']];
        let iconCss = [['fas','fa-times'], ['fas', 'fa-check']];
        let buttons = Array.from(Array(buttonCss.length)).map(
            (value,index)=>{
                let button = UI.ActionButton(buttonCss[index], iconCss[index], buttonGroup.node);
                button.setClickFunction(()=>{container.node.remove()});
                return button
            }
        );
        return buttons;
    })(columns[1].node);

    return {buttons, node}
};

module.exports = {
    TaskCard:TaskCard
};