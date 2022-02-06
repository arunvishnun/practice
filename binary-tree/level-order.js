// TODO: Not working - fix it

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

var result = []
function height(root) {
    if (root === null) {
        return 0;
    }
    let lHeight = height(root.left);
    let rHeight = height(root.right);
    if(lHeight > rHeight) {
        return lHeight + 1
    } 
    return rHeight + 1;
}

function printCurrentLevel(root, level, result = []) {
    if (root === null) {
        return;
    }

    if (level === 1) {
        return root.data;
    } else if (level > 1) {
        result[level-1] = [printCurrentLevel(root.left, level-1, result), printCurrentLevel(root.right, level-1, result)]
    }
}


function printLevelOrder(root) {
    let result = [];
    let h = height(root);

    for(let i = 1; i <= h; i ++) {
        printCurrentLevel(root, i, result);
        console.log(result);
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

console.log(printLevelOrder(root));