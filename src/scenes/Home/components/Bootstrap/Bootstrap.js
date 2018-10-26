const Bootstrap = (()=>{
    let createElement = (nodeType, cssClasses=[], parentNode = NaN)=>{
        let node = ((nodeType)=>{
            let node = document.createElement(nodeType);
            cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
            return node
        })(nodeType, cssClasses);

        if(!Number.isNaN(parentNode)){
            parentNode.appendChild(node);
        }

        return {node}
    };

    let Button = (cssClasses, iconClasses, nodeType = 'button')=>{
        let button =  createElement(nodeType,cssClasses);
        button.icon = createElement('i',iconClasses,button.node);
        button.onClick = (callbackfn)=>{button.node.addEventListener('click',callbackfn)};
        return button;
    };

    return {Button,createElement}
})();

module.exports = {
    Bootstrap:Bootstrap
};