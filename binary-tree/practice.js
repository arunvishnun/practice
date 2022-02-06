function levelOrder(root) {
    let q = [root];
    let levels = []
    while(q.length) {
        let qLength = q.length;
        let level = []
        for (let i = 0; i < qLength; i++) {
            
            let node = q.shift();
            if(node.left) {
                q.push(node.left);
            }
            if(node.right) {
                q.push(node.right);
            }
            level.push(node.data);
        }
        levels.push(level);
    }

    return levels;
    
}