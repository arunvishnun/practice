class Node {

    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }

    insert(value) {
        if (value <= this.data) {
            if (this.left === null) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    contains(value) {
        if (value === this.data) {
            return true;
        } else if (value < this.data) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
            
        } else {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }

    inorder() {
        if (this.left !== null) {
            this.left.inorder()
        }
        console.log(this.data);
        if (this.right !== null) {
            this.right.inorder()
        }
    }

}

const root = new Node(10);

root.insert(7)
root.insert(16)
root.insert(1)
root.insert(6)
root.insert(15)
root.insert(20)

console.log(root);
console.log(root.inorder());