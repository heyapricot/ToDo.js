const Home = (()=>{
    let node = (()=>{
        let node = document.createElement('section');
        node.id = 'main';
        return node;
    })();

    return {node}
})();

module.exports = {
    Home:Home
};