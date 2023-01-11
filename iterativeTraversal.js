//use stack 

/**
 * IN: right --> left
 * OUT: middle --> left --> right
 */
var preorderTraversal = function(root, res = []){
    if(!root) return res;
    const stack = [root];
    let cur = null;
    while(stack.length){
        cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
}

/**
 * IN: left --> right
 * OUT: left --> middle --> right
 */
var inorderTraversal = function(root, res = []) {
    const stack = [];
    let cur = root;
    while(stack.length || cur) {
        if(cur) {
            stack.push(cur);
            // 左 far to the left
            cur = cur.left;
        } else {
            // --> 弹出 中 到了空节点
            cur = stack.pop();
            res.push(cur.val); 
            // 右
            cur = cur.right;
        }
    };
    return res;
};

/**
 * IN: left --> right
 * OUT: middle --> right --> left --> reverse
 */

var postorderTraversal = function(root, res = []){
    if(!root) return res;
    const stack = [];
    let cur = null;
    while(stack.length){
        cur = stack.pop();
        res.push(cur.val);
        cur.left && stack.push(cur.left);
        cur.right && stack.right(cur.right);
    }
    return res.reverse();
}


//Universal iterative traversal
// 前序遍历：中左右
// 压栈顺序：右左中
var preorderTraversal = function(root, res = []) {
    const stack = [];
    if(root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
        stack.push(node); // 中
        stack.push(null);
    }
    return res;
}

//  中序遍历：左中右
//  压栈顺序：右中左
 
var inorderTraversal = function(root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right); // 右
        stack.push(node); // 中
        stack.push(null);
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};

// 后续遍历：左右中
// 压栈顺序：中右左
 
var postorderTraversal = function(root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        stack.push(node); // 中
        stack.push(null);
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};