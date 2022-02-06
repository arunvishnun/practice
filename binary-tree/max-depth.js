
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

// Depth First Search method.
// Find the maxDepth of each sub tree. 
// The max length from this subproblem + 1 for the current node gives maxDepth
function maxDepth(root) {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) 
}


function maxDepthIterative(root) {
    const stack = [root];
    let current = root;
    while(current !== null || stack.length > 0) {
        while(current !== null) {
            stack.push(current.left);
            current = current.left;
        }
        // current = stack[stack.length -1];
        current =  stack.pop();
        
        console.log(current)
        current = current.right;
    }
    
}



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



console.log(maxDepthIterative(root))