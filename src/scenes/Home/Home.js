const {Bootstrap} = require('./components/Bootstrap/Bootstrap');
const {ToDo} = require('./components/ToDo/ToDo');
const Home = ((project)=>{
    let node = (()=>{
        let node = document.createElement('section');
        node.id = 'main';
        return node;
    })();

    let tasksContainer = ((parentNode, id)=>{
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

            return {body,head,node}
        })(node, project);

        return {node,table}

    })(node, 'taskTableContainer');

    let taskCreator = ((parentNode)=>{
        let container = ((parentNode, cssClasses, id)=>{
            let obj = Bootstrap.createElement('div',cssClasses,parentNode);
            let node = obj.node;
            node.id = id;

            let row = ((parentNode)=>{
                let obj = Bootstrap.createElement('div',['row'],parentNode);
                let node = obj.node;
                let col = ((parentNode, cssClasses)=>{
                    let obj = Bootstrap.createElement('div',['col',...cssClasses],parentNode);
                    let node = obj.node;
                    let card = ((parentNode, cssClasses)=>{
                        let obj = Bootstrap.createElement('div', ['card',...cssClasses], parentNode);
                        let node = obj.node;
                        let body = ((parentNode)=>{
                            let obj = Bootstrap.createElement('div',['card-body'],parentNode);
                            let node = obj.node;
                            let form = ((parentNode)=>{
                                let obj = Bootstrap.createElement('form',[],parentNode);
                                let node = obj.node;
                                let rows = ((parentNode, rowQuantity)=>{
                                    let rows = Array.from(Array(rowQuantity)).map(()=>{
                                        return Bootstrap.createElement('div',['form-row'], parentNode);
                                    });

                                    let top = ((row)=>{
                                        let col = ((parentNode)=>{
                                            let obj = Bootstrap.createElement('div',['col'],parentNode);
                                            let node = obj.node;
                                            let input = ((parentNode, placeHolderText)=>{
                                                let obj = Bootstrap.createElement('input',['form-control','form-control-sm', 'bg-dark', 'border-success', 'text-light'],parentNode);
                                                let node = obj.node;
                                                node.placeholder = placeHolderText;
                                            })(node, 'Task Description');
                                        })(row.node);


                                    })(rows[0]);

                                })(node,2);
                            })(node);
                        })(node);
                        return {node}
                    })(node, ['border-success', 'bg-dark']);
                })(node, ['d-flex', 'flex-column']);
            })(node);

            return {node,row}
        })(parentNode, ['container-fluid'], 'taskCreatorContainer');
    })(node);


    return {node, tasksContainer}
})(ToDo.currentProject);

module.exports = {
    Home:Home
};