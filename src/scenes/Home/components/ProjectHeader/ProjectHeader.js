const {Bootstrap} = require('../Bootstrap/Bootstrap');
const ProjectHeader = (()=>{
    let container = Bootstrap.createElement('div',['container','p-3']);
    container.node.id = 'projectHeader';
    let row = Bootstrap.createElement('div',['row', 'd-flex', 'justify-content-center'], container.node);
    let column = Bootstrap.createElement('div',['col-6'], row.node);
    let select = Bootstrap.createElement('select',['custom-select', 'bg-transparent', 'border-0', 'text-light', 'text-center', 'text-capitalize'], column.node);
    let node = container.node;
    let callbacks = [];

    let cleanOptions = ()=>{ while(select.node.hasChildNodes()){ select.node.removeChild(select.node.firstChild) } };

    let changeEventHandler = (event)=>{
        let index = Number.parseInt(event.target.value);
        //console.log(`${event.target.value} was selected`);
        onSelectChange(index);
    };

    let onSelectChange = (index)=>{
        callbacks.forEach((callback)=>callback(index));
    };

    let renderOptions = (projectNames) => {
        cleanOptions();
        projectNames.forEach((projectName, index) => {
            let option = document.createElement('option');
            option.value = index;
            option.textContent = projectName;
            select.node.appendChild(option);
        });
    };

    let setCallback = (callback)=> callbacks.push(callback);

    select.node.onchange = changeEventHandler;

    return {node, renderOptions, setCallback};
})();

module.exports = {
    ProjectHeader:ProjectHeader
};