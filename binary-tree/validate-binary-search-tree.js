// https://leetcode.com/explore/featured/card/top-interview-questions-easy/94/trees/625/
/**
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

*/

// A good explanation for the same - https://www.youtube.com/watch?v=MILxfAbIhrE

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function isValidBST(root, min, max) {
    if (root === null) return true;

    if (root.data < min || root.data > max) {
        return false;
    }

    return isValidBST(root.left, min, root.data) && isValidBST(root.right, root.data, max);
}

function isBST(root) {
    return isValidBST(root, -Infinity, Infinity);
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


console.log(isBST(root));


const root2 = new Node(10);

root2.left = new Node(5);
root2.right = new Node(15);

root2.left.left = new Node(1);
root2.left.right = new Node(6);

root2.right.left = new Node(14);
root2.right.right = new Node(16);

console.log(isBST(root2));