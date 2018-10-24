const {Bootstrap} = require('./components/Bootstrap/Bootstrap');
const {TaskCreator} = require('./components/TaskCreator/TaskCreator');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = ((project)=>{
    let node = document.createElement('section');
    node.id = 'main';

    let tasksContainer = ((parentNode, id)=>{
        let obj = Bootstrap.createElement('div',['container'],parentNode);
        let node = obj.node;
        node.id = id;

        let table = ((parentNode, project)=>{
            let obj = Bootstrap.createElement('table',['table','table-dark'],parentNode);
            let node = ((node, id)=>{
                node.id = id;
                return node;
            })(obj.node, 'taskTable');

            let head = ((parentNode, project)=>{
                let obj = Bootstrap.createElement('thead',[],parentNode);
                let node = obj.node;
                let row = ((headers, parentNode)=>{
                    let node = Bootstrap.createElement('tr',['text-capitalize', 'text-center'],parentNode).node;
                    headers.forEach((headText)=>{
                        let th = document.createElement('th');
                        th.textContent = headText;
                        th.scope = 'col';
                        node.appendChild(th);
                    });
                    return {node}
                })([project.name],node);

                return {node}
            })(obj.node, project);

            let body = ((parentNode)=>{
                let node = Bootstrap.createElement('tbody',[],parentNode).node;

                return {node}
            })(obj.node);

            return {body,head,node}
        })(node, project);

        return {node,table}

    })(node, 'taskTableContainer');

    let container = Bootstrap.createElement('div',['container'],node);
    container.node.id = 'taskCreatorContainer';
    container.row = Bootstrap.createElement('div',['row','h-100'],container.node);
    container.row.col = Bootstrap.createElement('div',['col','col-sm','d-flex', 'flex-column', 'justify-content-center'],container.row.node);
    container.row.col.node.appendChild(TaskCreator.node);

    return {node, tasksContainer}
})(ToDo.currentProject);

module.exports = {
    Home:Home
};