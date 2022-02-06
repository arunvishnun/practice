
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function levelOrder(root) {
    let levels = []
    if (root === null) {
        return levels;
    }

    const q = [root];
    while(q.length) {
        const qLength = q.length;
        const level = [];
        console.log('while', q)
        for (let i = 0; i < qLength; i++) {
            console.log('qLength', qLength)
            const node = q.shift();
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
            level.push(node.data);
        }
        levels.push(level);
    }
    return levels;
}

var levelOrderRecursive = function(root) {
    
    const result = [];
    
    const depthFirstSearch = function(root,depth){
        if(!root) return 0;
      
        
        if(depth == result.length){
            result.push([]);
        }
        
        result[depth].push(root.val);
        
        depthFirstSearch(root.left,depth + 1);
        depthFirstSearch(root.right,depth + 1);
    }
   
    
    depthFirstSearch(root,0);
    
    return result;
};

const root = new Node(1);

root.left = new Node(3);
root.right = new Node(4);

root.left.left = new Node(13);
root.left.right = new Node(14);

root.right.left = new Node(11);
root.right.right = new Node(15);


root.left.left.left = new Node(30);
root.left.left.right = new Node(31);
root.left.right.left = new Node(32);
root.left.right.right = new Node(33);

root.right.left.left = new Node(34);
root.right.left.right = new Node(35);
root.right.right.left = new Node(36);
root.right.right.right = new Node(37);



console.log(levelOrder(root))