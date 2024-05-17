const items = [
    {id:1,name:'Item1',parentId:null},
    {id:2,name:'Item1.1',parentId:1},
    {id:3,name:'Item1.2',parentId:1},
    {id:4,name:'Item2',parentId:null},
    {id:5,name:'Item2.1',parentId:4},
    //...更多的项目
];

function buildTree(items,parentId = null){
    let tree = [];
    for(let i in items){
        if (items[i].parentId == parentId) {
            const children = buildTree(items,items[i].id);
            if (children.length) {
                items[i].children = children;
            }
            tree.push(items[i]);
        }
    }
    return tree;
}

//使用上面的函数构建树
const tree = buildTree(items);
console.log(tree);