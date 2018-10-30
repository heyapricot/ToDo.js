const {Bootstrap} = require('../Bootstrap/Bootstrap');
const UI = (()=>{
    let ActionButton = (buttonCss, iconCss, parentNode = NaN)=>{
        let button = Bootstrap.createElement('div',buttonCss,parentNode);
        let node = button.node;
        let icon = Bootstrap.createElement('i',iconCss,button.node);

        let setClickFunction = (callbackfn)=>node.addEventListener('click',callbackfn);

        return {node, setClickFunction}
    };

    let PriorityPicker = (buttonQuantity, buttonCss, iconCss)=>{
        let activeButtonIndex = 0;
        let addCallback = (callbackfn)=>callbacks.push(callbackfn);
        let buttonGroup = Bootstrap.createElement('div', ['btn-group', 'btn-group-sm']);
        let buttons = ((parentNode, quantity, cssClasses, iconClasses )=> Array.from(Array(quantity)).map(
            (elem,index)=>{
                let btnCss = cssClasses.map((elem,index)=>index === 0 ? [elem,'border-0','active'] : [elem,'border-0']);
                let icnCss = Array.from(Array(buttonQuantity)).map(()=>iconClasses);
                let btn = Bootstrap.createElement('div',['btn', ...btnCss[index]],parentNode);
                btn.node.icon = Bootstrap.createElement('i',icnCss[index],btn.node);
                let closure = ()=>{
                    setActiveButton(index);
                    onValueChange();
                };
                btn.node.addEventListener('click',closure);
                return btn;
            }))(buttonGroup.node,buttonQuantity,buttonCss, iconCss);
        let callbacks = [];
        let node = buttonGroup.node;
        let onValueChange = ()=>callbacks.forEach((callback)=>callback());
        let setActiveButton= (index = 0)=>{
            [buttons[activeButtonIndex],buttons[index]].forEach((button)=>{button.node.classList.toggle('active')});
            activeButtonIndex = index;
        };
        let value = ()=> activeButtonIndex;
        return {addCallback,buttons,node,setActiveButton,value};
    };

    return {ActionButton, PriorityPicker}
})();

module.exports = {
    UI:UI
};