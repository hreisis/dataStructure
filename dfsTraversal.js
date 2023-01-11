/**
 * 递归
 * BFS(Breadth First Search) uses Queue data structure for finding the shortest path. 
 * DFS(Depth First Search) uses Stack data structure.
 */
//Preorder
var preorderTraversal = function(root) {
    let res = []; //return value
    const dfs = function(root){
        if(root === null) return; //stop condition
        res.push(root.val); //traveral logic
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
}

//inorder
var inorderTraveral = function(root) {
    let res = [];
    const dfs = function(root){
        if(root === null) return;
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return res;
}

//postorder
var postorderTraversal = function(root) {
    let res = [];
    const dfs = function(root){
        if(root === null) return;
        dfs(root.left);
        dfs(root.right);
        res.push(root.val);
    }
    dfs(root);
    return res;
}

