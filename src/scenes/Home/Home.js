const {Bootstrap} = require('./components/Bootstrap/Bootstrap');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = ((project)=>{
    let node = (()=>{
        let node = document.createElement('section');
        node.id = 'main';
        return node;
    })();

    let container = ((parentNode, id)=>{
        let obj = Bootstrap.createElement('div',['container-fluid'],parentNode);
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

            return {node}
        })(node, project);

        return {node,table}

    })(node, 'taskTableContainer');


    return {node, container}
})(ToDo.currentProject);

module.exports = {
    Home:Home
};