const {Bootstrap} = require('../Bootstrap/Bootstrap');
const UI = (()=>{
    let priorityPicker = (buttonQuantity, buttonCss, iconCss)=>{
        let activeButtonIndex = 0;
        let buttonGroup = Bootstrap.createElement('div', ['btn-group', 'btn-group-sm']);
        let buttons = ((parentNode, quantity, cssClasses, iconClasses )=> Array.from(Array(quantity)).map(
            (elem,index)=>{
                let btnCss = cssClasses.map((elem,index)=>index === 0 ? [elem,'border-0','active'] : [elem,'border-0']);
                let icnCss = Array.from(Array(buttonQuantity)).map(()=>iconClasses);
                let btn = Bootstrap.createElement('div',['btn', ...btnCss[index]],parentNode);
                btn.node.icon = Bootstrap.createElement('i',icnCss[index],btn.node);
                let closure = ()=>{setActiveButton(index)};
                btn.node.addEventListener('click',closure);
                return btn;
            }))(buttonGroup.node,buttonQuantity,buttonCss, iconCss);
        let node = buttonGroup.node;
        let setActiveButton= (index = 0)=>{
            [buttons[activeButtonIndex],buttons[index]].forEach((button)=>{button.node.classList.toggle('active')});
            activeButtonIndex = index;
        };
        let getPriority = ()=> activeButtonIndex;
        return {buttons,getPriority, node};
    };

    return {priorityPicker}
})();

module.exports = {
    UI:UI
};