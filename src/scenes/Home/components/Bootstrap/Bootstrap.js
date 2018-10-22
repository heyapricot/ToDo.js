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
    return {createElement}
})();

module.exports = {
    Bootstrap:Bootstrap
};