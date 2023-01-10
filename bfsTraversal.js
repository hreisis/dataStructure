//Level Order Binary Tree Traversal
var levelOrder = function(root) {
    let res = [], queue = [];
    queue.push(root);
    if(root === null) {
        return res;
    }
    while(queue.length !== 0) {
        //record current level nodes number
        let length = queue.length;
        //save the nodes
        let curLevel = [];
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            //save next level nodes
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);0
        }
        //push to result array
        res.push(curLevel);
    }
    return res;
}