const {Bootstrap} = require('./components/Bootstrap/Bootstrap');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = ((project)=>{
    let node = (()=>{
        let node = document.createElement('section');
        node.id = 'main';
        return node;
    })();

    let table = ((parentNode, project)=>{
        let obj = Bootstrap.createElement('table',['table','table-dark'],parentNode);
        let node = obj.node;

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

        return {node}
    })(node, project);

    return {node, table}
})(ToDo.currentProject);

module.exports = {
    Home:Home
};