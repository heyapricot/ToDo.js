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

            let row = ((parentNode, cssClasses)=>{
                let obj = Bootstrap.createElement('div',['row', ...cssClasses],parentNode);
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
                                let rows = ((parentNode, rowQuantity)=> Array.from(Array(rowQuantity)).map(()=> Bootstrap.createElement('div',['form-row'], parentNode)))(node,2);

                                let top = ((row)=>{
                                    let col = ((parentNode)=>{
                                        let obj = Bootstrap.createElement('div',['col'],parentNode);
                                        let node = obj.node;
                                        let input = ((parentNode, placeHolderText)=>{
                                            let obj = Bootstrap.createElement('input',['form-control','form-control-sm', 'bg-transparent', 'border-success', 'text-light'],parentNode);
                                            let node = obj.node;
                                            node.placeholder = placeHolderText;
                                        })(node, 'Task Description');
                                    })(row.node);
                                })(rows[0]);

                                let bottom = ((row)=>{
                                    let columns = ((parentNode, columnQuantity)=> Array.from(Array(columnQuantity)).map(()=>Bootstrap.createElement('div',['col-auto'],parentNode)))(row.node,3);
                                    let dateInput = ((parentNode)=>{
                                        let obj = Bootstrap.createElement('input',['form-control','form-control-sm', 'bg-transparent', 'border-success', 'text-light'],parentNode);
                                        let node = obj.node;
                                        node.type = 'Date';
                                    })(columns[0].node);

                                    let buttonGroup = ((parentNode)=>{
                                        let obj = Bootstrap.createElement('div', ['btn-group', 'btn-group-sm'],parentNode);
                                        let node = obj.node;
                                        let buttons = ((parentNode, quantity, buttonClasses)=> Array.from(Array(quantity)).map((elem,index)=>{
                                            let cssClasses = buttonClasses[index];
                                            console.log(cssClasses);
                                            let obj = Bootstrap.createElement('div',['btn', ...cssClasses],parentNode);
                                            obj.node.textContent = index;
                                            console.log(`Elem is: ${elem}, Index is: ${index}`);
                                        }))(node,3,[['btn-outline-primary'], ['btn-outline-success'], ['btn-outline-danger']]);
                                        console.log(buttons);
                                    })(columns[1].node);

                                    let newTaskButton = ((parentNode, textContent)=>{
                                        let obj = Bootstrap.createElement('div',['btn','btn-success', 'btn-sm'],parentNode);
                                        let node = obj.node;
                                        node.textContent = textContent
                                        return obj
                                    })(columns[2].node, 'New Task');

                                })(rows[1]);

                            })(node);
                        })(node);
                        return {node}
                    })(node, ['border-success', 'bg-transparent']);
                })(node, ['d-flex', 'flex-column', 'justify-content-center']);
            })(node, ['h-100']);

            return {node,row}
        })(parentNode, ['container-fluid'], 'taskCreatorContainer');
    })(node);


    return {node, tasksContainer}
})(ToDo.currentProject);

module.exports = {
    Home:Home
};